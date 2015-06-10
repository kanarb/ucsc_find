<!-- begin tabs code -->
     jQuery(document).ready(function() {
		 jQuery("#form-cruzcat input#cruzcattextbox").val("");
         jQuery("#encore").attr("selected", "");
         jQuery("#cruzcat").attr("selected", "selected");
         jQuery("#tabswitch ul li:first").addClass("active");
         jQuery("#tabswitch div.tab-container:first").show();
  
         jQuery("#tabswitch ul li").click(function(){
             jQuery("#tabswitch div.tab-container").hide();
             jQuery("#tabswitch ul li").removeClass("active");
  
             var tab_class = jQuery(this).attr("class");
  
             jQuery("#tabswitch div." + tab_class).show();
             jQuery("#tabswitch ul li." + tab_class).addClass("active");
         })		

 				<!-- end tabs code -->
 				<!-- begin catalogs switch code -->

 	       jQuery("#encore").attr("selected", "selected");
         jQuery('#selectdb').change(function() {
             jQuery('#form-encore, #form-cruzcat, #form-melvyl, #form-worldcat').hide();
             jQuery('#form-' + jQuery(this).find('option:selected').attr('id')).show();
         });
     });
 				<!-- end catalogs switch code -->
 				<!-- begin cruzcat classic code -->
 				jQuery(document).ready(function() {
 	 						jQuery("#X").attr("selected", "selected");
   						jQuery('#searchclassic').change(function() {
 			 								var ccaction = jQuery(this).find(':selected')[0].id;
 	   								jQuery('#cruzcatform').attr('action', 'http://cruzcat.ucsc.edu/search/' + ccaction);
   						});

 				<!-- end cruzcat classic code -->
 				<!-- begin melvyl default select code -->

 	       jQuery("#book").attr("selected", "selected");
     });
     <!-- end melvyl default select code -->
 				<!-- begin worldcat default select code -->
 				jQuery(document).ready(function() {
 	       jQuery("#wcbook").attr("selected", "selected");
     });
 				<!-- end worldcat default select code -->
 				<!-- begin reserves search code -->
     jQuery(document).ready(function() {
         jQuery("#r").attr("selected", "selected");
   						jQuery('#searchres').change(function() {
 			 								var resaction = jQuery(this).find(':selected')[0].id;
 	   								jQuery('#reservesform').attr('action', 'http://cruzcat.ucsc.edu/search/' + resaction);
   						});			
     });