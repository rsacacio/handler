angular.module("handlerApp").directive("hanTableHeader",function(){return{restrict:"E",replace:!0,scope:{title:"@title",sort:"@sort",tableParams:"=tableParams"},templateUrl:"views/directive/table/tableHeaderDirective.html",link:function(a){var b=function(){return a.tableParams.isSortBy(a.sort,"asc")?"-asc":a.tableParams.isSortBy(a.sort,"desc")?"-desc":""};a.classHeader=function(){return"sort"+b()};a.classSort=function(){return"fa fa-sort"+b()};a.sortList=function(){var b={};b[a.sort]=a.tableParams.isSortBy(a.sort,
"asc")?"desc":"asc";a.tableParams.sorting(b)}}}});