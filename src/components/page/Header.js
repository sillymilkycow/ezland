class Header extends EzAlpineHTMLElement {

    ALPINE_COMPONENT_KEY = 'initHeaderComponent';

    EZ_HTML = ($) => /*html*/`
    <nav role="navigation">
        <ul>
            <template x-for="(item, idx) in menuArr">
                <li>
                    <a  x-bind:href="item.url"
                        :class="{
                            'selected' : selectedIdx === idx
                        }"
                        class="menu-tab"
                    >
                        <span class="text" x-text="item.title"></span>
                    </a>
                </li>
            </template>
        </ul>
    </nav>
    `

    initHeaderComponent($) {
        return {
            selectedIdx: null,
            menuArr: [
                {title:'EzLand.js', url:'/index.html'},
                {title:'GitHub Repo', url:'https://github.com/ezlandjs/ezlandjs.github.io'}
            ],
            init(){
                let self = this;
                let strPath = window.location.pathname.split('/');
                    strPath = strPath[strPath.length-1];
                if (!strPath) {
                    this.selectedIdx = 0;
                    return;
                }
                this.menuArr.forEach( (elem, idx) => {
                    if (elem.url.indexOf(strPath) >= 0) {
                        self.selectedIdx = idx;
                    }
                });
            }
        }
    }
}
$ez.setComponent(Header);
