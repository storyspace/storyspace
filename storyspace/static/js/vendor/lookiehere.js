// TODO: get user customizable CSS out of the .js file and into a .css file

var lookiehere = {
    _options: {
        // Image selection properties
        selector: 'img.lookiehere',
        attribute: 'src',

        // Tabbing and tabbing accessories
        activateByTab: true,
        tabText: 'expand',
        tabColor: 'black',
        tabFontColor: 'white',
        tabOpacity: '0.5',

        // Modal stuff... the main stuff
        padding: '10em',
        color: 'black',
        opacity: '0.5',
        transition: '0.2s',
    },

    options: function(opts) {
        for (var key in opts)
            if (opts.hasOwnProperty(key))
                this._options[key] = opts[key];
    },    

    init: function(){
        // Modal, tab contaier creation
        this.createModal();
        this.createTabContainer();

        // Event binding
        this.bindImages();
    },

    createTabContainer: function() {
        if (this.tabContainer) document.body.removeChild(this.tabContainer);

        tabContainer = document.createElement('div');
        tabContainer.setAttribute('class', 'lookiehere-tabcontainer');
        tabContainer.style.cssText = 'position: absolute; left: 0px; top: 0px;'
        document.body.appendChild(tabContainer);

        this.tabContainer = tabContainer;
    },

    createModal: function() {
        if (this.container) document.body.removeChild(this.container);

        container = document.createElement('div');
        container.setAttribute('class', 'lookiehere-container');
        container.style.cssText = 'position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0; z-index: 2147483647; pointer-events: none;'
        container.style.setProperty('-webkit-Transition' , 'opacity ' + this._options.transition); 
        container.style.transition = 'opacity ' + this._options.transition;
        document.body.appendChild(container);

        bg = document.createElement('div');
        bg.style.cssText = 'position: relative; left: 0px; top: 0px; width: 100%; height: 100%;'
        bg.style.backgroundColor = this._options.color;
        bg.style.opacity = this._options.opacity;
        container.appendChild(bg);

        imageElem = document.createElement('img');
        imageElem.style.cssText = 'position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); max-width: 100%; max-height: 100%;'
        imageElem.style.padding = this._options.padding;
        container.appendChild(imageElem);

        this.bindEvent(container, 'click', this.hideModal);

        this.container = container;
        this.imageElem = imageElem;
    },

    // Called from modal container
    hideModal: function() {
        this.style.opacity = 0;
        this.style.pointerEvents = 'none';    
    },

    bindImages: function() {
        elems = document.querySelectorAll(this._options.selector);

        if (this._options.activateByTab) {
            for (var i = elems.length - 1; i >= 0; i--) {
                this.addTab(elems[i]);
            };
        } else {
            for (var i = elems.length - 1; i >= 0; i--) {
                this.bindEvent(elems[i], 'click', this.updateAndShowModal);
            };            
        }
    },

    addTab: function(elem) {
        offsets = this.utils.getOffsets(elem);
        tab = document.createElement('span');
        tab.style.cssText = 'position: absolute;';
        tab.style.left = offsets.left + 'px';
        tab.style.top = offsets.top + 'px';
        tab.style.backgroundColor = this._options.tabColor;
        tab.style.color = this._options.tabFontColor;
        tab.style.opacity = this._options.tabOpacity;
        tab.style.padding = '0.2em';

        tab.setAttribute('class', 'lookiehere-tab');
        tab.setAttribute('data-lookiehere-img-src', elem.getAttribute(lookiehere._options.attribute));

        tab.innerHTML = this._options.tabText;

        this.tabContainer.appendChild(tab);

        this.bindEvent(tab, 'click', this.updateAndShowModalFromTab);
    },

    // For compatibility issues with adding event handlers
    bindEvent: function(elem, e, func) {
        if (elem.addEventListener)
            elem.addEventListener(e, func, false);
        else
            elem.attachEvent('on' + e, func);
    },

    // This actual event handler, called from the binded object
    updateAndShowModal: function(e) {
        lookiehere.imageElem.setAttribute('src', this.getAttribute(lookiehere._options.attribute));
        lookiehere.container.style.opacity = 1;
        lookiehere.container.style.pointerEvents = 'auto';
    },

    // Called from tab
    updateAndShowModalFromTab: function(e) {
        lookiehere.imageElem.setAttribute('src', this.getAttribute('data-lookiehere-img-src'));
        lookiehere.container.style.opacity = 1;
        lookiehere.container.style.pointerEvents = 'auto';
    },

    cleanUp: function() {
        document.body.removeChild(this.container);
    },

    utils: {
        getOffsets: function(elem){
            var left = 0, top = 0;
            do {
              if (!isNaN(elem.offsetLeft)) 
                left += elem.offsetLeft;
              if (!isNaN(elem.offsetTop)) 
                top += elem.offsetTop;
            } while (elem = elem.offsetParent);
            return {left: left, top: top};
        },
    },
}
