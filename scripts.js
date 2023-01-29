
const menuStyle = {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '75vw',
    height: '100vh',
    backgroundColor: "white",
    color: 'black',
    position: 'absolute',
    top: 0,
    right: 0,
    gap:"80px",
    padding:" 40px 20px"
}

const menuStyleInitial = {
    display: 'unset',
    flexDirection: 'unset',
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 'unset',
    height: 'unset',
    backgroundColor: "unset",
    color: 'unset',
    position: 'unset',
    top: 0,
    right: 0,
    gap:"80px",
    padding:"unset"
}

function handleNav(){
    $(".menus").css(menuStyle)
    $(".menu--list").css({display:"flex", flexDirection:"column"})
    $(".menu--close").css({display:"block", width:"30px", marginLeft:"auto"})
    $(".menu--icon").css("display", "none")
    $(".menu--list li a").css({fontSize: "18px", marginBottom:"10px"})  
    $(".menu--list li").css({marginBottom:"20px"})
    $("body").css("overflow", "hidden")
    $(".cover").css({"z-index":"1","display":"block"})
}

function closeNav(){
    $(".cover").css({"display":"none"})
    $("body").css("overflow", "initial")
    $(".menu--list li").css({marginBottom:"0px"})
    $(".menu--list li a").css({fontSize: "unset", marginBottom:"0px"})  
    $(".menu--icon").css("display", "block")
    $(".menu--close").css({display:"none", width:"30px", marginLeft:"auto"})
    $(".menu--list").css({display:"none", flexDirection:"column"})
    $(".menus").css(menuStyleInitial)
}