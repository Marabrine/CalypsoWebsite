calypso-website/src/containers/SearchBar.jsx [18:24]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      <ul className={`search-results ${value ? "visible" : ""}`}>
        {value && filteredItems.length === 0 ? (
          <li className="no-results">
            <i>{t("noResults")}</i>
          </li>
        ) : (
          filteredItems.map((item, index) => {
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



calypso-website/src/containers/mobile/SearchBarMobile.jsx [30:36]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      <ul className={`search-results ${value ? "visible" : ""}`}>
        {value && filteredItems.length === 0 ? (
          <li className="no-results">
            <i>{t("noResults")}</i>
          </li>
        ) : (
          filteredItems.map((item, index) => {
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



