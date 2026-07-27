class SimpleDemo extends EzHTMLElement {
    /**
     * <ez-childs></ez-childs> - it's default EzLand.js element
     * Use this tag to pass other elements into the current component.
     * 
     * subtitle - Use the raw attribute value only when you intentionally need unescaped content.
     * subtitle_safe - HTML-escaped value (To help prevent XSS vulnerabilities)
    */
    EZ_HTML = ({subtitle, subtitle_safe}) => /*html*/`
        <ez-childs></ez-childs>
        <div>${subtitle}</div>
    `
}
$ez.setComponent(SimpleDemo);
