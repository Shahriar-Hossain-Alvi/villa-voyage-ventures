import logo from "../../assets/images/Logo.png";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareWhatsapp } from "react-icons/fa6";


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-black font-semibold text-white">
                <nav>
                    <img className="w-40" src={logo} alt="" />
                    <h3 className="text-xl">Villa Voyage Ventures Ltd.</h3>
                    <p>Providing reliable service since 1992</p>
                </nav>
                <nav>
                    <h6 className="footer-title font-playfairDisplay font-extrabold">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Neighbourhoods</a>
                    <a className="link link-hover">Floor plan</a>
                </nav>
                <nav>
                    <h6 className="footer-title font-playfairDisplay font-extrabold">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="footer-title font-playfairDisplay font-extrabold">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="input input-bordered join-item text-secondaryColor" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
            <footer className="footer items-center p-4 bg-black border-t text-neutral-content">
                <aside className="items-center grid-flow-col">
                    <p>Copyright © 2024 - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href="#">
                        <FaFacebookSquare className="text-lg bg-secondaryColor text-white hover:text-primaryColor" />
                    </a>
                    <a href="#">
                        <FaInstagramSquare className="text-lg bg-secondaryColor text-white hover:text-primaryColor" />
                    </a>
                    <a href="#">
                        <FaSquareXTwitter className="text-lg bg-secondaryColor text-white hover:text-primaryColor" />
                    </a>
                    <a href="#">
                        <FaSquareWhatsapp className="text-lg bg-secondaryColor text-white hover:text-primaryColor" />
                    </a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;