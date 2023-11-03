import { NavbarLinks } from "../../../data";

const NavLinks = () => {
  return (
    <>
      {NavbarLinks.map((link, index) => (
        <div key={index}>
          <div>
            <h1 className="md:medium-16 medium-24">{link.name}</h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
