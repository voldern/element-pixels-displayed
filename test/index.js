/* eslint-disable func-names */
const pixelsVisible = require('../');

describe('Test', () => {
    const elementHeight = 100;

    beforeAll(function () {
        this.viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        document.querySelector('html').style.height = '100%';
        document.querySelector('body').style.height = '100%';

        this.element = document.createElement('div');
        this.element.style.width = '100px';
        this.element.style.height = `${elementHeight}px`;
        this.element.style.background = '#000';
        this.element.style.position = 'absolute';
        this.element.style.top = `${this.viewportHeight}px`;

        document.body.appendChild(this.element);

        // I couldn't get margins or paddings working in IE8 to get the
        // document height extended, so this dirty hack is needed
        const marginElement = document.createElement('div');
        marginElement.innerHTML = '&nbsp';
        marginElement.style.position = 'absolute';
        marginElement.style.top = `${this.viewportHeight * 2 + elementHeight}px`;
        document.body.appendChild(marginElement);
    });

    beforeEach(() => {
        window.scrollTo(0, 0);
    });

    it('it should return 0 when item is not in view', function () {
        expect(pixelsVisible(this.element)).toBe(0);
    });

    it('should return 0 when item is scrolled past', function () {
        window.scrollTo(0, this.viewportHeight + elementHeight);

        expect(pixelsVisible(this.element)).toBe(0);
    });

    it('should return number of visible pixels', function () {
        window.scrollTo(0, 20);

        expect(pixelsVisible(this.element)).toBe(20);
    });

    it('should return whole size of element when its all visible', function () {
        window.scrollTo(0, 110);

        expect(pixelsVisible(this.element)).toBe(elementHeight);
    });
});
