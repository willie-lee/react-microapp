import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions"

registerApplication({
  name: "@scotia-infosys/scotia-micro-nav",
  app: () => System.import("@scotia-infosys/scotia-micro-nav"),
  activeWhen: isActive.nav,
  customProps: { domElement: document.getElementById('nav-container') }
});

registerApplication({
  name: "@scotia-infosys/scotia-micro-page1",
  app: () => System.import("@scotia-infosys/scotia-micro-page1"),
  activeWhen: isActive.page1,
  customProps: { domElement: document.getElementById('page-1-container') }
});

registerApplication({
  name: "@scotia-infosys/scotia-micro-page2",
  app: () => System.import("@scotia-infosys/scotia-micro-page2"),
  activeWhen: isActive.page2,
  customProps: { domElement: document.getElementById('page-2-container') }
});

start({
  urlRerouteOnly: true,
});
