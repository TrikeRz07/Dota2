let process = {
  menu:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Dota 2 The International Champions</div>
              </div>
            </div>

    <div className="list-group">
      <ul>
        <li className="list-group-title"></li>
        <li><a href='#' onClick={process.NewBee}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">NewBee</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.EvilGeniuses}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">EvilGeniuses</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.WingsGaming}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">WingsGaming</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.TeamLiquid}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">TeamLiquid</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
      </ul>
    </div>

</div>
</div>
</div>
</div>
</div>;
    ReactDOM.render(content,document.getElementById('root'));
  },
  Alicorn:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">World of Myth</div>
              </div>
            </div>
            <center><img src={"img/imp.jpg"}/>
            <p>asdajslfkjsldkjadlk jalkjlksjdlkaj lkj lakjskldj </p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  NewBee:function(){
         let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Lineback</div>
              </div>
            </div>
            <center><img src={"img/NB.jpg"} width={"100%"}/>
            <p>Newbee is a professional Dota 2 team based in Shanghai, China. They are the Dota 2 The International Champion 2014.
 </p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  EvilGeniuses:function(){
         let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">EvilGeniuses</div>
              </div>
            </div>
            <center><img src={"img/EG.jpg"} width={"100%"}/>
            <p>Evil Geniuses is a professional gaming organization founded in 1999, organization is in North America.They are the Dota 2 The International Champion 2015.
 </p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  WingsGaming:function(){
  let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">WingsGaming</div>
              </div>
            </div>
            <center><img src={"img/W.jpg"} width={"100%"}/>
            <p>Wings Gaming is a defunct Chinese eSports team that was based in Chongqing. They are the Dota 2 The International Champion 2016. </p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
    TeamLiquid:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">TeamLiquid</div>
              </div>
            </div>
            <center><img src={"img/L3.jpg"} width={"100%"}/>
            <p>Team Liquid is a professional team, founded in the Netherlands in 2000.They are the Dota 2 The International Champion 2017. </p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  loading:function(){
    let content = <div>
          Loading...
        </div>;
    ReactDOM.render(content,document.getElementById('root'));
  }
}

process.loading();
setTimeout(function(){
  process.menu();
},3000);
