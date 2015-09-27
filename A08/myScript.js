/**
 * Created by Fuqan_Ruan on 2015/9/22.
 */
var faq1 = false;
var faq2 = false;
var faq3 = false;
$(document).ready(
    function()
    {
        $("#q1").click(
            function()
            {
                if(faq1 == false)
                {
                    $("#a1").show();
                    $("#oc1").text("[-]");
                    faq1 = true;
                }else
                {
                    $("#a1").hide();
                    faq1 = false;
                    $("#oc1").text("[+]");
                }
            }
        );
        $("#q2").click(
            function()
            {
                if(faq2 == false)
                {
                    $("#a2").show();
                    faq2 = true;
                    $("#oc2").text("[-]");
                }else
                {
                    $("#a2").hide();
                    faq2 = false;
                    $("#oc2").text("[+]");
                }
            }
        );
        $("#q3").click(
            function()
            {
                if(faq3 == false)
                {
                    $("#a3").show();
                    faq3 = true;
                    $("#oc3").text("[-]");
                }else
                {
                    $("#a3").hide();
                    faq3 = false;
                    $("#oc3").text("[+]");
                }
            }
        );

        $("#submit").click(
            function()
            {
                var url = $("#urlInput").val();
                var countLinks = $("#countLinks");
                var count = 0;
                countLinks.load(url + " a", function(data)
                {
                    count = $(data).find("a").length;
                    $("#numLinks").text("Number of links: " + count);
                });
            }
        );



    }
);
