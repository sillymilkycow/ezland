# Changelog

| Version | Feature | Description |
|--|--|--|
| 1.0.4 | - Added ```ez-complex="1"``` attribute for EzLand components. | This attribute tells EzLand that this component may contain other EzLand components. It enables automatic initialization of nested components. <br/><br/>⚠️Important: this creates a script-loading dependency chain. Inner components will only be loaded after the outer ez-complex component has finished loading. |
| 1.0.3 | - Added ```ez-simple="1"``` attribute for EzLand components. | Prevents analysis of internal components.<br/><br/>If a component has this attribute set, any components within it will not be displayed or loaded.<br/>Should be used for components that are part of an array, such as product-item in a products grid. | 
