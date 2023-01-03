
    $(document).ready(function(){
        $('.register-info-box').fadeIn();
        $('.register-show').addClass('show-log-panel');
    });
    
    
    $('.login-reg-panel input[type="radio"]').on('change', function() {

        if($('#log-reg-show').is(':checked')) {
            $('.register-info-box').fadeIn();
            $('.login-info-box').fadeIn();
    
            $('.white-panel').removeClass('right-log');
            $('.register-show').addClass('show-log-panel');
            $('.login-show').removeClass('show-log-panel');
        }
    else if($('#log-login-show').is(':checked')) {
            $('.login-info-box').fadeIn();
            $('.register-info-box').fadeOut();
    
            $('.white-panel').addClass('right-log');
            $('.register-show').removeClass('show-log-panel');
            $('.login-show').addClass('show-log-panel');
    
        }
    });