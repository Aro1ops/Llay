/**
 * Ранний захват токенов из URL до deferred-бандлов.
 * Winline (золотой билет): токен читается только на /auth/success и кладётся на время проверки
 * в sessionStorage (slay.winline.pending); в localStorage он не попадает, «участник» ставит
 * модуль (src/lib/winline-client.js) только после ответа BFF /winline/status. Без slay.auth.token
 * и без /auth/me. На других страницах параметры Winline лишь вычищаются из URL.
 * SLAY (VK / Яндекс): сессия только в HttpOnly cookie. Старые URL-токены удаляем,
 * никогда не сохраняем и не обмениваем на сессию.
 * /auth/confirm и /auth/reset (ссылки из писем): одноразовый токен забирается из query
 * ЗДЕСЬ, до любых других скриптов, query сразу убирается из адресной строки, токен остаётся
 * только в замыкании и отдаётся один раз через window.__slayTakeLinkToken
 * (src/lib/link-token.js). Яндекс.Метрика на /auth/* не подключается (src/lib/analytics.js).
 */
(function () {
  try {
    // Миграция: прежний slay.winline.token (JWT в localStorage) удаляем, участником не считаем.
    var legacyWinline = localStorage.getItem("slay.winline.token");
    if (legacyWinline !== null) {
      if (localStorage.getItem("slay.auth.token") === legacyWinline) {
        localStorage.removeItem("slay.auth.token");
        localStorage.removeItem("slay.auth.user");
      }
      localStorage.removeItem("slay.winline.token");
    }
    localStorage.removeItem("slay.auth.token");
    localStorage.removeItem("slay.auth.user");
  } catch (e) {}
  try {
    var path = window.location.pathname;
    if (path === "/auth/confirm" || path === "/auth/reset") {
      var linkParams = new URLSearchParams(window.location.search);
      var linkToken = (linkParams.get("token") || linkParams.get("t") || "").trim();
      if (window.location.search) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      window.__slayTakeLinkToken = function () {
        var value = linkToken;
        linkToken = "";
        return value;
      };
      return;
    }

    var params = new URLSearchParams(window.location.search);

    var goldenReturn = false;
    try {
      var ret = sessionStorage.getItem("slay.auth.return") || "";
      goldenReturn = ret.indexOf("golden-ticket") !== -1;
    } catch (e) {}

    var winlineDedicated =
      params.get("winline_token") || params.get("winline_access_token") || "";
    var provider = (params.get("provider") || "").toLowerCase();
    var winlineFlow =
      provider === "winline" ||
      params.get("winline") === "1" ||
      params.get("winline_auth") === "1" ||
      params.get("from") === "winline";

    var access = params.get("access_token");
    var token = params.get("token");
    var jwtLike = token && token.split(".").length === 3 ? token : "";

    if (!winlineFlow && (access || jwtLike)) {
      if (goldenReturn || window.location.hash.indexOf("golden-ticket") !== -1) {
        winlineFlow = true;
      }
    }

    var winlineToken = winlineDedicated.trim();
    if (!winlineToken && winlineFlow) {
      winlineToken = (access || jwtLike || "").trim();
    }

    if (winlineToken) {
      if (path.replace(/\/+$/, "") === "/auth/success") {
        try {
          sessionStorage.setItem("slay.winline.pending", winlineToken);
        } catch (e) {}
        if (localStorage.getItem("slay.auth.token") === winlineToken) {
          localStorage.removeItem("slay.auth.token");
          localStorage.removeItem("slay.auth.user");
        }
      }
      params.delete("winline_token");
      params.delete("winline_access_token");
      params.delete("winline");
      params.delete("winline_auth");
      params.delete("from");
      params.delete("provider");
      params.delete("after-auth");
      params.delete("access_token");
      params.delete("token");
      var searchW = params.toString();
      window.history.replaceState(
        null,
        "",
        window.location.pathname +
          (searchW ? "?" + searchW : "") +
          window.location.hash,
      );
      return;
    }

    if (!access && !token) return;
    params.delete("access_token");
    params.delete("token");
    params.delete("state");
    var search = params.toString();
    window.history.replaceState(
      null,
      "",
      window.location.pathname +
        (search ? "?" + search : "") +
        window.location.hash,
    );

  } catch (e) {}
})();
