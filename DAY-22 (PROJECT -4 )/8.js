function ma() {
    function val(cha) {
        console.log("the smaller charater");
        console.log(cha);

        var upper = cha.map((element, index) => {

            return (element.toUpperCase());
        })
        // console.log(upper);
        console.log("the Upper case charater");
        return upper;
    }

    console.log(val(["cat", "dog"]));
}
ma();