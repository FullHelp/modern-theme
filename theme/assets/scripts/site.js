(function (hc) {

    /**
     * Show like & dislike buttons and hide everything else.
     */
    function showLikeDisklikeButtons () {
        $('.rate-article form').hide();
        $('.rate-article .main').show();
    }

    /**
     * Show article feedback form and hide like/dislike buttons.
     */
    function showArticleFeedbackForm () {
        document.getElementById('feedback').value = ''
        $('.rate-article form').show();
        $('.rate-article .main').hide();
    }

    /**
     * Show 'like sent' success message.
     */
    function likeSent () {
        $('.rate-article .rating-sent').show();
        $('.rate-article form').hide();
        $('.rate-article .main').hide();
    }

    /**
     * Show 'feedback sent' success message.
     */
    function feedbackSent () {
        $('.rate-article .feedback-sent').show();
        $('.rate-article form').hide();
        $('.rate-article .main').hide();
    }

    /**
     * Send article's like.
     *
     * @param {Number} articleId
     */
    function sendLike (articleId) {
        startLoadingState();

        $.post(`/${KnowledgeBaseApp.site.locale}/article/${articleId}/rating`, {
            _token: KnowledgeBaseApp.site.csrfToken,
            type: 'like'
        }, likeSent).always(resetLoadingState);
    }

    /**
     * Send article's dislike.
     *
     * @param {Number} articleId
     */
    function sendDislike (articleId) {
        startLoadingState();

        $.post(`/${KnowledgeBaseApp.site.locale}/article/${articleId}/rating`, {
            _token: KnowledgeBaseApp.site.csrfToken,
            type: 'dislike'
        }, showArticleFeedbackForm).always(resetLoadingState);
    }

    /**
     * Send article's feedback.
     *
     * @param {Number} articleId
     */
    function sendFeedback (articleId) {
        startLoadingState();

        $.post(`/${KnowledgeBaseApp.site.locale}/article/${articleId}/feedback`, {
            _token: KnowledgeBaseApp.site.csrfToken,
            feedback: document.getElementById('feedback').value
        }, feedbackSent).always(resetLoadingState);
    }

    /**
     * Start the loading state.
     */
    function startLoadingState () {
        $('.rate-article').addClass('loading');
        $('.btn').prop('disabled', true);
    }

    /**
     * End the loading state.
     */
    function resetLoadingState () {
        $('.rate-article').removeClass('loading');
        $('.btn').prop('disabled', false);
    }

    /**
     * Highlight search terms.
     */
    function highlight () {
        var text = document.getElementById("query").value;

        if (text.trim() !== '') {
            var query = new RegExp("(\\b" + text + "\\b)", "gim");
            var e = document.getElementById("searchhighlight").innerHTML;
            var enew = e.replace(/(<em>|<\/em>)/igm, "");

            document.getElementById("searchhighlight").innerHTML = enew;
            
            var newe = enew.replace(query, "<em>$1</em>");

            document.getElementById("searchhighlight").innerHTML = newe;
        }
    }

    hc.showLikeDisklikeButtons = showLikeDisklikeButtons;
    hc.showArticleFeedbackForm = showArticleFeedbackForm;
    hc.sendLike = sendLike;
    hc.sendDislike = sendDislike;
    hc.sendFeedback = sendFeedback;

    hc.search = {
        highlight
    }

})(window.helpcenter = (window.helpcenter || {}))