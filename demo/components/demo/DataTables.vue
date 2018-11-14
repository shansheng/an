<template>
  <div>
   <center><a style="text-decoration: underline;" target="_blank" href="http://www.datatables.club/example/">DataTables官方文档</a>
     </center>
     <div class="table-responsive">
     <table id="table-demo" class="table table-striped table-bordered" cellspacing="0" width="100%"></table>
  </div>
  </div>
</template>
<script>
$(function () { 
   var dataSet = [
        ['Trident','Internet Explorer 4.0','Win 95+','4','X'],
        ['Trident','Internet Explorer 5.0','Win 95+','5','C'],
        ['Trident','Internet Explorer 5.5','Win 95+','5.5','A'],
        ['Trident','Internet Explorer 6','Win 98+','6','A'],
        ['Trident','Internet Explorer 4.0','Win 95+','4','X'],
        ['Trident','Internet Explorer 5.0','Win 95+','5','C'],
        ['Trident','Internet Explorer 5.5','Win 95+','5.5','A'],
        ['Trident','Internet Explorer 6','Win 98+','6','A'],
        ['Trident','Internet Explorer 4.0','Win 95+','4','X'],
        ['Trident','Internet Explorer 5.0','Win 95+','5','C'],
        ['Trident','Internet Explorer 5.5','Win 95+','5.5','A'],
        ['Trident','Internet Explorer 6','Win 98+','6','A'],
        ['Trident','Internet Explorer 4.0','Win 95+','4','X'],
        ['Trident','Internet Explorer 5.0','Win 95+','5','C'],
        ['Trident','Internet Explorer 5.5','Win 95+','5.5','A'],
        ['Trident','Internet Explorer 6','Win 98+','6','A']
        ];
  $('#table-demo').dataTable( {
        "data": dataSet,
        "responsive": true,
        "language": {
            "paginate": {
              "previous": '<i class="demo-psi-arrow-left"></i>',
              "next": '<i class="demo-psi-arrow-right"></i>'
            }
        },
        "columns": [
            { "title": "Engine" },
            { "title": "Browser" },
            { "title": "Platform" },
            { "title": "Version", "class": "center" },
            { "title": "Grade", "class": "center" }
        ]
    } );
// $('#table-demo').anDataTable({"columns": [
//             { "title": "Engine" },
//             { "title": "Browser" },
//             { "title": "Platform" },
//             { "title": "Version", "class": "center" },
//             { "title": "Grade", "class": "center" }
//         ]});
});
</script>
<style scoped>
@import "https://lastsoup.github.io/Nifty/css/demo/nifty-demo-icons.min.css";
@import "../css/Tables.css";
@import "../css/DataTables.css";
</style>

