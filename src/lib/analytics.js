import ReactGA from "react-ga4";

export const initGA = () => {
  const id = import.meta.env.VITE_GA_ID;
  if (id && id !== 'G-placeholder') {
    ReactGA.initialize(id);
  }
};

export const logEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};
