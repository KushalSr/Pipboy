#font-face {
	font-family: Pipboy;
	src: url('../font.ttf');
}



body {
	font-family: Pipboy, sans-serif;

	color: #14fe17;
	background: #272b23;
}

body::after {
	height: 100%;
	width: 100%;
	content: "";
	position: absolute;
	top: 0px;
	left: 0px;
	background:repeating-linear-gradient(0deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .4) 1px, transparent 1px, transparent 2px);
	opacity: .4;
	z-index: 1000000;
	pointer-events: none;


}

.navbar.navbar-light {
	border-bottom: 2px solid;
	margin: -2px -10px;

}

.navbar.navbar-light: :before, .navbar.navbar-light: :after {
	height: 7px;
	width: 2px;
	content: "";
	position: absolute;
	display: block;
	z-index: 5000;
	background: #14fe17;
	bottom: -6px;
}

.navbar::before {
	left: 0px;
            
}

.navbar::after {
	right: 0px;

}


.nav-link {
	color: #14fe20;
}
ul > li.nav-item > a.nav-link, ul > li.navbar-item.active > a.nav-link {
	color:#14fe17 !important;
	font-size: 30px;
	line-height: 22px;
	padding-bottom: 0px;


}
.navbar-item.active::before {
	content: "";
	position: absolute;
	background: #f00;
	width: 100%;
	height: 18px;
	top: 26px;
	background: #272b23;
	border-left: 2px solid;
	border-right: 2px solid;
	border-top: 2px solid;
	left: 0px;
            

}

.navbar-light .navbar-nav > li.nav-item > .nav-link,
.navbar-light .navbar-nav > li.navbar-item.active > .nav-link  {
	text-align: center;
        width: 90px;
  
		margin: auto;
	font-size: 32px;
	line-height: 22px;

	padding-bottom: 0px;

	z-index: 50;
	position: relative;
	background: #272b23;

	
}



.navbar-nav {
	width: 100%;

}

.navbar-light ul.navbar-nav > li {
	display: block;
	position: relative;
	width: 100%;


}

.center-image {
        position: absolute;
        margin-left: 130px;
        

}

.center-image img {
	margin: auto;
	display: block;
	position: relative;
	max-height: 300px;
	

	filter: grayscale(1) sepia(100%)  hue-rotate(50deg) saturate(7)  brightness(1) contrast(2);

        margin-top: 50px;
        margin-left: -5px;

}

.pip-footer {


	position: fixed;
	bottom: 0;
	width: calc(100% - 20px);
	margin: 10px;
}

.navbar.navbar-light .navbar-nav {
        margin: 0px 200px; 
}


.nav.nav-tabs {
	margin: 20px;
    border-bottom: none;
}
.nav.nav-tabs > .nav-item > .nav-link:hover {
	border: 1px solid transparent;
}

.nav.nav-tabs > li > a {
	font-size: 26px !important;
	background: transparent !important;
	border: 1px solid transparent !important;
	padding: 5px 10px;
}

.nav.nav-tabs > li:nth-child(1) > a {
	opacity: .5;

}

.nav.nav-tabs > li:nth-child(3) > a {
	opacity: .2;

}
 .level-progress  {
	width: 50%;
	height: 10px;
		border: 2px solid; 

	display: inline-block;
	width: 70%;

}

.level-progress-indicator {
	height: 6px;
	background: #14fe17;
	position: relative;
	width: 70%;
        
}

.navbar.navbar-light.pip-footer {
	border: none;
        font-size: 20px;
        margin: 00px 0px;
        margin-left: -40px;

}
.navbar.pip-footer .col-3, .navbar.pip-footer .col-6 {
	background: rgba(16, 255, 0, 0.15);
        padding: 3px 10px;
        margin-top: -10px;
      


}
.navbar.pip-footer .col-6 {
	margin: -1px 8px;
	flex: 0 0 40%;
        margin-top: -10px;


}

.stat-bar {
        width: 60px;
        margin: auto;
        
}
#status {
        max-width: 400px;
        margin: auto;
}

.stat-bars > .row {
        margin-bottom:60px;
        margin-right: -40px;
        margin-left: -40px;

}

.w10 {
        width: 10%;
}
.w20 {
        width: 20%;
}

.w30 {
        width: 30%;
}

.w40 {
        width: 40%;
}

.w50 {
        width: 50%;
}
.w60 {
        width: 60%;
}

.w70 {
        width: 70%;
}

.w80 {
        width: 80%;
}

.w90 {
        width: 90%;
}

.stat-numbers .col-1, .stat-numbers .col-2 {
        background: rgba(16, 255, 0, 0.15);
    

        margin-right: 48px;
        margin-left:-32px;
        margin-top: 40px;
        margin-bottom: 10px;
         width: 55px;
}
      
        
.stat-numbers .col-1.transparent, .stat-numbers .col-2.transparent {
        background: transparent;
}

.stat-numbers img.gun-img {
        width: 100%;
        filter: grayscale(1) brightness(100) contrast(0) sepia(100) hue-rotate(45deg) saturate(20);

}
.stat-numbers img.sm-img {
          filter: grayscale(1) brightness(100) contrast(0) sepia(100) hue-rotate(45deg) saturate(20);



    width: 180%;
    margin: -1.5px;
}
.stat-numbers img.hm-img {
          filter: grayscale(1) brightness(100) contrast(0) sepia(100) hue-rotate(45deg) saturate(20);



    width: 100%;
    margin: -1.5px 2px;
    margin-top: 8px;

}


.stat-numbers img.em-img {
          filter: grayscale(1) brightness(100) contrast(0) sepia(100) hue-rotate(45deg) saturate(20);



    width: 140%;
    margin: -1.5px 2px;
    margin-top: 8px;

}

.stat-numbers img.rn-img {
          filter: grayscale(1) brightness(100) contrast(0) sepia(100) hue-rotate(45deg) saturate(20);



    width: 220%;
    margin-top: 8px;
    margin-left: -6px;
   
   

}

#status.tab-pane.full {
        width: 100%;
        max-width: 100%;
}

.text-list {
        float: left;
        padding: 0px;
        list-style: none;
        margin: 0px;

}
.item-list li a {
        display: block;
        width: 300px;
        padding: 5px 10px;
        border-radius: 2px;
        color: #14fe17;

}
.item-list li a:hover {
        text-decoration: none;
             background: #14fe17;
             color: #272b23;
     }

     .tab-pane.full {
        height: calc(100vh-180px);

     }

     .item-stats {
        position: absolute;
        right: 70px;
        bottom: -300px;
        width: 200px;

     }

     .pull-left {
        float: left !important;
     }
     .pull-right {
        float: right !important;
     }

     .item-stats .row .col-12 {
        background: rgba(16, 255, 0, 0.15);
        margin-bottom: 2px;

     }




