class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="row">
                    <h7>Jason Traeder</h7>
                    <div class="socials">
                        <a class="hover-link" href="https://twitter.com/PapaBeefolini">
                            <span class="tooltip-box">X / Twitter</span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                        </a>
                        <a class="hover-link" href="https://www.linkedin.com/in/jason-traeder/">
                            <span class="tooltip-box">LinkedIn</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                        </a>
                        <a class="hover-link" href="https://github.com/PapaBeefolini">
                            <span class="tooltip-box">Github</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                        <a class="hover-link" href="https://papabrickolini.itch.io/">
                            <span class="tooltip-box">itch.io</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M71.92 34.77C50.2 47.67 7.4 96.84 7 109.73v21.34c0 27.06 25.29 50.84 48.25 50.84 27.57 0 50.54-22.85 50.54-50 0 27.12 22.18 50 49.76 50s49-22.85 49-50c0 27.12 23.59 50 51.16 50h.5c27.57 0 51.16-22.85 51.16-50 0 27.12 21.47 50 49 50s49.76-22.85 49.76-50c0 27.12 23 50 50.54 50 23 0 48.25-23.78 48.25-50.84v-21.34c-.4-12.9-43.2-62.07-64.92-75C372.56 32.4 325.76 32 256 32S91.14 33.1 71.92 34.77zm132.32 134.39c-22 38.4-77.9 38.71-99.85.25-13.17 23.14-43.17 32.07-56 27.66-3.87 40.15-13.67 237.13 17.73 269.15 80 18.67 302.08 18.12 379.76 0 31.65-32.27 21.32-232 17.75-269.15-12.92 4.44-42.88-4.6-56-27.66-22 38.52-77.85 38.1-99.85-.24-7.1 12.49-23.05 28.94-51.76 28.94a57.54 57.54 0 0 1-51.75-28.94zm-41.58 53.77c16.47 0 31.09 0 49.22 19.78a436.91 436.91 0 0 1 88.18 0C318.22 223 332.85 223 349.31 223c52.33 0 65.22 77.53 83.87 144.45 17.26 62.15-5.52 63.67-33.95 63.73-42.15-1.57-65.49-32.18-65.49-62.79-39.25 6.43-101.93 8.79-155.55 0 0 30.61-23.34 61.22-65.49 62.79-28.42-.06-51.2-1.58-33.94-63.73 18.67-67 31.56-144.45 83.88-144.45zM256 270.79s-44.38 40.77-52.35 55.21l29-1.17v25.32c0 1.55 21.34.16 23.33.16 11.65.54 23.31 1 23.31-.16v-25.28l29 1.17c-8-14.48-52.35-55.24-52.35-55.24z"/></svg>
                        </a>
                        <a class="hover-link" href="https://gamejolt.com/@PapaBrickolini">
                            <span class="tooltip-box">Game Jolt</span>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="1 0 22 22"><path d="M 8 4 L 8 6 L 7 6 L 7 8 L 6 8 L 6 10 L 5 10 L 5 12 L 4 12 L 4 14 L 10 14 L 10 16 L 9 16 L 9 17 L 9 18 L 8 18 L 8 20 L 9 20 L 9 19 L 10 19 L 10 18 L 11 18 L 11 17 L 12 17 L 12 16 L 13 16 L 13 15 L 14 15 L 14 14 L 15 14 L 15 13 L 16 13 L 16 12 L 17 12 L 17 11 L 18 11 L 18 10 L 19 10 L 19 9 L 16 9 L 16 8 L 17 8 L 17 7 L 18 7 L 18 6 L 19 6 L 19 5 L 20 5 L 20 4 L 8 4 z M 8 20 L 7 20 L 7 21 L 8 21 L 8 20 z M 9 6 L 16 6 L 16 7 L 15 7 L 15 8 L 14 8 L 14 9 L 13 9 L 13 10 L 12 10 L 12 11 L 13 11 L 13 12 L 14 12 L 14 11 L 15 11 L 15 12 L 14 12 L 14 13 L 13 13 L 13 12 L 12 12 L 12 11 L 11 11 L 11 12 L 10 12 L 10 11 L 9 11 L 9 12 L 8 12 L 8 11 L 7 11 L 7 10 L 8 10 L 8 8 L 9 8 L 9 6 z M 8 10 L 8 11 L 9 11 L 9 10 L 8 10 z M 10 11 L 11 11 L 11 10 L 10 10 L 10 11 z"></path></svg>
                        </a>
                        <a class="hover-link" href="https://sbox.game/brick">
                            <span class="tooltip-box">sbox.game</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 120 120">
                                <g transform="translate(-30,-35)">
                                    <path class="cls-2" d="m 42.33,122.83 a 20.68,20.68 0 0 1 -8.4,-6.39 16.79,16.79 0 0 1 -3.46,-9.1 h 15.78 a 6,6 0 0 0 2.52,4.38 8.91,8.91 0 0 0 5.5,1.68 7.81,7.81 0 0 0 4.62,-1.16 3.58,3.58 0 0 0 1.64,-3 3.5,3.5 0 0 0 -2.34,-3.31 46.2,46.2 0 0 0 -7.56,-2.38 71.68,71.68 0 0 1 -9.33,-2.75 16.1,16.1 0 0 1 -6.44,-4.58 12.47,12.47 0 0 1 -2.71,-8.44 14.35,14.35 0 0 1 2.48,-8.17 16.6,16.6 0 0 1 7.28,-5.83 27.85,27.85 0 0 1 11.43,-2.15 q 9.79,0 15.45,4.85 a 18.91,18.91 0 0 1 6.48,12.88 H 60.53 A 6.36,6.36 0 0 0 58.15,85 a 8.26,8.26 0 0 0 -5.28,-1.59 7.27,7.27 0 0 0 -4.29,1.08 3.4,3.4 0 0 0 -1.49,2.94 3.59,3.59 0 0 0 2.38,3.36 38.68,38.68 0 0 0 7.42,2.24 78.39,78.39 0 0 1 9.42,2.97 16.29,16.29 0 0 1 6.4,4.66 13.24,13.24 0 0 1 2.84,8.64 13.67,13.67 0 0 1 -2.55,8.16 17,17 0 0 1 -7.37,5.65 28.24,28.24 0 0 1 -11.16,2 29.83,29.83 0 0 1 -12.14,-2.28 z" id="path4"/>
                                    <path class="cls-2" d="m 136,124.42 -6.07,-5.88 q -9,6.9 -21.65,6.9 A 32.33,32.33 0 0 1 95.12,123 a 19.61,19.61 0 0 1 -8.63,-7 18.53,18.53 0 0 1 -3,-10.59 19.74,19.74 0 0 1 3.32,-11.16 24,24 0 0 1 9.94,-8.16 21,21 0 0 1 -3.46,-5.74 17.21,17.21 0 0 1 -1,-6 15.64,15.64 0 0 1 2.42,-8.5 16.51,16.51 0 0 1 7,-6 25.41,25.41 0 0 1 11,-2.19 23.5,23.5 0 0 1 10.92,2.33 16.08,16.08 0 0 1 6.72,6.26 15.65,15.65 0 0 1 2.05,8.58 h -15 a 4.56,4.56 0 0 0 -4.85,-5.22 5.45,5.45 0 0 0 -3.73,1.3 4.28,4.28 0 0 0 -1.5,3.36 8.13,8.13 0 0 0 1.26,4.11 28.08,28.08 0 0 0 4,5 l 16,15.58 c 0.13,-0.31 0.3,-0.68 0.51,-1.12 0.21,-0.44 0.46,-0.93 0.7,-1.49 l 3.46,-5.88 h 16 l -4.48,8.12 a 76.66,76.66 0 0 1 -5.79,10.45 l 15.77,15.5 z M 120.13,109 105.57,94.9 q -6.72,3.47 -6.72,9.34 a 7.49,7.49 0 0 0 2.76,5.92 10.93,10.93 0 0 0 7.42,2.38 18.33,18.33 0 0 0 11.1,-3.54 z" id="path5"/>
                                /g>
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer);