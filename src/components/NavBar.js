import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksArray = links.map((link) => {
    const newLink = `#${link}`
    return <a href={newLink} key={link}>{link}</a>
  }
  );

  return <nav>{linksArray}</nav>;
}

export default NavBar;
