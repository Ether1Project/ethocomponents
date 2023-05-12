const headerTemplate = document.createElement('template');
const footerTemplate = document.createElement('template');

// Check if there is a menu style available, if not use the ETHO default style
ethocomponent_menustyle=`
  <style>
  header {
      font-size: 20px;
      color: #FFFFFF;
  }

  @media (max-width: 900px) {
    .row {
      flex-basis: auto;
      flex-flow: column;
      flex-wrap: nowrap;
    }
  }

  
  </style>
  `;


headerTemplate.innerHTML = `
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
 ${ethocomponent_menustyle}
<header>
 <nav class="navbar navbar-expand navbar-dark" style="background-color: #681832; color: #FFFFFF">
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <div class="flexi">
         <div class="row flexi justify-content-md-center">
            <div class="col">
                <a class="navbar-brand" href="/">
                    <img width="128" height="80" src="https://raw.githubusercontent.com/Ether1Project/ethoprotocol-branding/main/EthoProtocol_color.png" crossorigin="anonymous">
                </a>
            </div>
 
            <div class="col">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
            </div>
            ${ethocomponent_menu}
            <slot name="ethodropdown"></slot>
          </div>
      </div>
    </ul>
  </div>
</nav>
  </header>
`;


customElements.define( 'header-component', class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }).innerHTML=headerTemplate.innerHTML
  }
  
  connectedCallback() {
    this.innerHTML=`
        <section slot="ethodropdown">
            <div class="col">
              <li class="nav-itemdropdown">
              <a class="nav-link dropdown-toggle" style="float: right;color: #FFFFFF" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                Etho Network
              </a>
              <ul class="dropdown-menu"  aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="https://ethoprotocol.com" target="_blank">Webpage</a></li>
                <li><a class="dropdown-item" href="https://discord.gg/MFn9Tmz" target="_blank">Discord</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item disabled">Mainnet</a></li>
                <li><a class="dropdown-item" href="https://explorer.ethoprotocol.com" target="_blank">Explorer</a></li>
                <li><a class="dropdown-item" href="https://stats.ethoprotocol.com" target="_blank">Blockchain stats</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item disabled">Testnet</a></li>
                <li><a class="dropdown-item" href="https://testnetexplorer.ethoprotocol.com" target="_blank">Explorer</a></li>
                <li><a class="dropdown-item" href="https://testnetstats.ethoprotocol.com" target="_blank">Blockchain stats</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="https://coinmarketcap.com/currencies/etho-protocol/" target="_blank">Coin market cap</a></li>
              </ul>
            </li>
        </div>
        </section>
     `;
  }
})





footerTemplate.innerHTML = `
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">  <style>
  footer {
      padding: 0 10px;
      list-style: none;
      display: flex;
      flex-shrink: 0;
      justify-content: space-between;

      background-color: #681832;
      font-size: 15px;
      color: #FFFFFF;
    }
    
    
  .right {
    text-align: right;
    box-shadow: dimgrey;
  }
  .center {
    text-align: center;
    box-shadow: dimgrey;
  }
    
    ul {
      padding: 0;

    }
    
    ul li {
          padding: 0 10px;
      list-style: none;
    }
    
    a {
      margin: 0 1px;
      color: inherit;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      color: inherit;

      box-shadow: inset 0 -2px 0 0 #333;
    }
 
    

  </style>
  
  <footer>
  <div class="container-fluid">
    <div class="row p-4">
      <div class="col-lg-6">
        <div class="row">
          <div class="col-md-4">
          <h5>Social</h5>
            <ul>
              <li><a href="https://discord.gg/3mE4tZt5SR"><i class="fa fa-discord" target="_blank"></i> Discord</a></li>
              <li><a href="https://t.me/Ether_1"><i class="fa fa-telegram" target="_blank"></i>  Telegram</a></li>
              <li><a href="https://twitter.com/EthoProtocol"><i class="fa fa-twitter" target="_blank"></i>  Twitter</a></li>
              <li><a href="https://github.com/Ether1Project"><i class="fa fa-github" target="_blank"></i>  Github</a></li>
              <li><a href="https://ethoprotocol.medium.com/"><i class="fa fa-medium" target="_blank"></i>  Medium</a></li>
              <li><a href="https://www.facebook.com/ethoprotocol"><i class="fa fa-facebook" target="_blank"></i>  Facebook</a></li>
              <li><a href="https://www.linkedin.com/company/ethoprotocol/"><i class="fa fa-linkedin" target="_blank"></i>  LinkedIn</a></li>
              <li><a href="https://www.pinterest.com/ethoprotocol"><i class="fa fa-pinterest" target="_blank"></i>  Pinterest</a></li>
              <li><a href="https://www.reddit.com/r/ethoprotocol/"><i class="fa fa-reddit" target="_blank"></i>  Reddit</a></li>
            </ul>
          </div>
          <div class="col-md-4">
          <h5>VPS providers</h5>
            <ul>
              <li><a href="https://pecuniaplatform.io/"><i class="fa fa-fire" target="_blank"></i>  Pecunia</a></li>
              <li><a href="https://www.digitalocean.com/"><i class="fa fa-fire" target="_blank"></i>  Contabo</a></li>
              <li><a href="https://contabo.com/en/"><i class="fa fa-fire" target="_blank"></i>  Digital ocean</a></li>
              <li><a href="https://www.hetzner.com/"><i class="fa fa-fire" target="_blank"></i>  Hetzner</a></li>
            </ul>
          </div>
          <div class="col-md-4">
          <h5>Partners</h5>
            <ul>
           </ul>
          </div>

        </div>
      </div>
      <div class="col-lg-6">
          <div class="row">
            <div class="col-md-4">
              <h5>Links</h5>
              <ul>
                <li><a href="https://ethoprotocol.com/wp-content/uploads/ETHO-Protocol-White-Paper.pdf" target="_blank">Whitepaper</a></li>
                <li><a href="https://explorer.ethoprotocol.com/" target="_blank">Explorer</a></li>
                <li><a href="https://explorer.ethoprotocol.com/" target="_blank">2nd explorer</a></li>
                <li><a href="https://docs.ethoprotocol.com/" target="_blank">Documentation</a></li>
                <li><a href="https://nodes.ethoprotocol.com/" target="_blank">Node dashboard</a></li>
                <li><a href="https://bitcointalk.org/index.php?topic=3725742.0" target="_blank">Bitcointalk ANN Thread</a></li>
                <li><a href="https://ethoprotocol.com/wp-content/uploads/2021/08/ethoblack2021roadmap-scaled.jpg target="_blank"">Roadmap</a></li>
                <li><a href="https://ethoprotocol.com/wp-content/uploads/etho_pitch_deck_20220424.pdf target="_blank"">Pitchdeck</a></li>
              </ul>
            </div>
            <div class="col-md-4">
              <h5>Tools</h5>
              <ul>
                <li><a href="https://info.ethoprotocol.com/" target="_blank">Info dashboard</a></li>
                <li><a href="https://status.ethoprotocol.com/" target="_blank">Network stats</a></li>
                <li><a href="https://stats.ethoprotocol.com/" target="_blank">Chain stats</a></li>
                <li><a href="https://bridge.ethoprotocol.com/" target="_blank">wETHO Bridge</a></li>
              </ul>
            </div>
            <div class="col-md-4">
              <h5>Contact</h5>
              <ul>
                <li><a href="/"><i class="fa fa-map-marker"></i>  Earth</a></li>
                <li><a href="/"><i class="fa fa-mobile"></i>  +1.888.700.ETHO</a></li>
                <li><a href="mailto:team@ethoprotocol.com"" target="_blank"><i class="fa fa-envelope"></i>  Team</a></li>
              </ul>
            </div>

        </div>
      </div>
    </div>
    <div class="row m-2">
      <div class="col-sm-7">
         <i class="fa fa-copyright"></i>  Copyright 2023 - Etho Protocol - All rights reserved
      </div>
      <div class="col-sm-2 center">
         <i class="fa fa-fire"></i>  Powered by
      </div>

      <div class="col-sm-3 center">
         <img class="img-fluid" width="128" height="80" src="https://raw.githubusercontent.com/Ether1Project/ethoprotocol-branding/main/EthoProtocol_color.png" crossorigin="anonymous">
      </div>
    </div>
    </div>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);

