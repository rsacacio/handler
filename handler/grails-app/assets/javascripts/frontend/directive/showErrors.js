angular.module('handlerApp').directive('fwShowErrors', function($timeout, $rootScope) {
      var linkFn = function (scope, el, attrs, formCtrl) {
        var blurred, inputEl, inputName, inputNgEl, toggleClasses;
        blurred = false;
        inputEl = el[0].querySelector('[name]');
        inputNgEl = angular.element(inputEl);
        inputName = inputNgEl.attr('name');
        if (!inputName) {
          throw 'show-errors element has no child input elements with a \'name\' attribute';
        }

        var blurred = false;
        
        scope.$on('invalid-input-verification:' + inputName, function(event, data) {
        	var pId = 'server-msg-for-'+inputName;
        	if ($('#'+pId).length < 1) {
        		el.append('<p id="'+pId+'" class="help-block">' + data + '</p>')
        	}
        	
        	$('#'+pId).html(data)
        	toggleClasses(true)
        });

        scope.$watch(function () {
            return formCtrl[inputName] && formCtrl[inputName].$invalid;
          }, function (invalid) {
            if(blurred){
              return toggleClasses(invalid);  
            }
          }
        );

        scope.$on('show-errors-check-validity', function () {
          blurred = true;
          return toggleClasses(formCtrl[inputName].$invalid);
        });

        scope.$on('show-errors-reset', function () {
          return $timeout(function () {
            var txt = $(el).find("textarea");
            if(txt.length > 0){
              txt.siblings("iframe").removeClass('input-ERRO');
            }
            el.removeClass('has-error');
            return blurred = false;
          }, 0, false);
        });

        return toggleClasses = function (invalid) {
          var txt = $(el).find("textarea");
          if(txt.length > 0){
            txt.siblings("iframe").toggleClass('input-ERRO', invalid);
          }
          el.toggleClass('has-error', invalid);  
        };

      };
      return {
        restrict: 'A',
        require: '^form',
        compile: function (elem, attrs) {
          if (!elem.hasClass('form-group')) {
            throw 'show-errors element does not have the \'form-group\' class';
          }
          return linkFn;
        }
      };
    }
  );