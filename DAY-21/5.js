function getFormattedDate()
{
    var da =new Date();
    var ye=da.getFullYear();
    var mo=da.getMonth();
    var da=da.getDate();
    var grap=`${ye}-${mo}-${da}`
    console.log(grap)

}
getFormattedDate();