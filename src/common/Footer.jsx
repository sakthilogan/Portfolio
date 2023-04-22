import React,{ Component } from 'react'

class Footer extends Component {
     render(){
          return(
               <div>

<footer>
       
        <div class="footer-area">
            <div class="container">
               <div class="footer-top footer-padding">
                   <div class="row justify-content-center">
                       <div class="col-lg-6">
                            <div class="footer-top-cap text-center">
                                <img src="assets/img/logo/logo2_footer.png" alt="" />
                                <span><a href="mailto:sakthiloganathan97@gmail.com">sakthiloganathan97@gmail.com</a></span>
                                <p>Marx Garden, Post office Box 17/18 </p>
                                <p>Indstrial Estate, Chennai - 600 095.</p>
                            </div>
                       </div>
                   </div>
               </div>
                <div class="footer-bottom">
                    <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-xl-9 col-lg-8">
                            <div class="footer-copy-right">
                                <p> 
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="mailto:sakthiloganathan97@gmail.com" target="_blank">Sakthi</a>
   </p>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4">
                            
                            <div class="footer-social f-right">
                                <a>Stay Connected</a>
                                <a href="https://twitter.com/" target='_blank'><i class="fab fa-twitter"></i></a>
                                <a href="https://facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://globe.com/" target="_blank"><i class="fas fa-globe"></i></a>
                                <a href="https://instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
     
    </footer>
   
    <div id="back-top" >
        <a title="Go to Top" href="#"> <i class="fas fa-level-up-alt"></i></a>
    </div>



               </div>
          )
     }
}

export default Footer 