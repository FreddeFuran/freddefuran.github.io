import ReactGA from "react-ga4"

export const initGA = () => {
    ReactGA.initialize("G-XH63B7HPZB");
}

export const trackPage = (path) => {
    ReactGA.send({hitType: "pageview", page: path});
}