(function (hc) {

    function showLikeDisklikeButtons () {
        $('.rate-article form').hide();
        $('.rate-article .main').show();
    }

    function showArticleFeedbackForm () {
        $('.rate-article form').show();
        $('.rate-article .main').hide();
    }

    function rateArticleSuccessMessage (message) {
        $('.rate-article .text-success').text(message);
        $('.rate-article form').hide();
        $('.rate-article .main').hide();
    }

    function sendLike (articleId) {
        startLoadingState()

        $.post(`/article/${articleId}/rating`, {
            type: 'like'
        }, function (response) {
            console.log(response)

            resetLoadingState()
        })
    }

    function sendDislike (articleId) {
        startLoadingState()

        $.post(`/article/${articleId}/rating`, {
            type: 'dislike'
        }, function (response) {
            console.log(response)

            resetLoadingState()
        })
    }

    function startLoadingState () {
        $('.rate-article').addClass('loading')
        $('.btn').prop('disabled', true)
    }

    function resetLoadingState () {
        $('.rate-article').removeClass('loading')
        $('.btn').prop('disabled', false)
    }

    hc.showLikeDisklikeButtons = showLikeDisklikeButtons
    hc.showArticleFeedbackForm = showArticleFeedbackForm
    hc.rateArticleSuccessMessage = rateArticleSuccessMessage
    hc.sendLike = sendLike
    hc.sendDislike = sendDislike

})(window.helpcenter = (window.helpcenter || {}))

$(document).ready(function () {
    helpcenter.showLikeDisklikeButtons()
})