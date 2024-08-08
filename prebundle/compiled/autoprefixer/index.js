(() => {
  var __webpack_modules__ = {
    9659: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let unpack = __nccwpck_require__(1711);
      function browsersSort(a, b) {
        a = a.split(" ");
        b = b.split(" ");
        if (a[0] > b[0]) {
          return 1;
        } else if (a[0] < b[0]) {
          return -1;
        } else {
          return Math.sign(parseFloat(a[1]) - parseFloat(b[1]));
        }
      }
      function f(data, opts, callback) {
        data = unpack(data);
        if (!callback) {
          [callback, opts] = [opts, {}];
        }
        let match = opts.match || /\sx($|\s)/;
        let need = [];
        for (let browser in data.stats) {
          let versions = data.stats[browser];
          for (let version in versions) {
            let support = versions[version];
            if (support.match(match)) {
              need.push(browser + " " + version);
            }
          }
        }
        callback(need.sort(browsersSort));
      }
      let result = {};
      function prefix(names, data) {
        for (let name of names) {
          result[name] = Object.assign({}, data);
        }
      }
      function add(names, data) {
        for (let name of names) {
          result[name].browsers = result[name].browsers
            .concat(data.browsers)
            .sort(browsersSort);
        }
      }
      module.exports = result;
      let prefixBorderRadius = __nccwpck_require__(2861);
      f(prefixBorderRadius, (browsers) =>
        prefix(
          [
            "border-radius",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-bottom-right-radius",
            "border-bottom-left-radius",
          ],
          {
            browsers,
            feature: "border-radius",
            mistakes: ["-khtml-", "-ms-", "-o-"],
          },
        ),
      );
      let prefixBoxshadow = __nccwpck_require__(2194);
      f(prefixBoxshadow, (browsers) =>
        prefix(["box-shadow"], {
          browsers,
          feature: "css-boxshadow",
          mistakes: ["-khtml-"],
        }),
      );
      let prefixAnimation = __nccwpck_require__(354);
      f(prefixAnimation, (browsers) =>
        prefix(
          [
            "animation",
            "animation-name",
            "animation-duration",
            "animation-delay",
            "animation-direction",
            "animation-fill-mode",
            "animation-iteration-count",
            "animation-play-state",
            "animation-timing-function",
            "@keyframes",
          ],
          { browsers, feature: "css-animation", mistakes: ["-khtml-", "-ms-"] },
        ),
      );
      let prefixTransition = __nccwpck_require__(40);
      f(prefixTransition, (browsers) =>
        prefix(
          [
            "transition",
            "transition-property",
            "transition-duration",
            "transition-delay",
            "transition-timing-function",
          ],
          {
            browsers,
            feature: "css-transitions",
            mistakes: ["-khtml-", "-ms-"],
          },
        ),
      );
      let prefixTransform2d = __nccwpck_require__(4602);
      f(prefixTransform2d, (browsers) =>
        prefix(["transform", "transform-origin"], {
          browsers,
          feature: "transforms2d",
        }),
      );
      let prefixTransforms3d = __nccwpck_require__(2866);
      f(prefixTransforms3d, (browsers) => {
        prefix(["perspective", "perspective-origin"], {
          browsers,
          feature: "transforms3d",
        });
        return prefix(["transform-style"], {
          browsers,
          feature: "transforms3d",
          mistakes: ["-ms-", "-o-"],
        });
      });
      f(prefixTransforms3d, { match: /y\sx|y\s#2/ }, (browsers) =>
        prefix(["backface-visibility"], {
          browsers,
          feature: "transforms3d",
          mistakes: ["-ms-", "-o-"],
        }),
      );
      let prefixGradients = __nccwpck_require__(2571);
      f(prefixGradients, { match: /y\sx/ }, (browsers) =>
        prefix(
          [
            "linear-gradient",
            "repeating-linear-gradient",
            "radial-gradient",
            "repeating-radial-gradient",
          ],
          {
            browsers,
            feature: "css-gradients",
            mistakes: ["-ms-"],
            props: [
              "background",
              "background-image",
              "border-image",
              "mask",
              "list-style",
              "list-style-image",
              "content",
              "mask-image",
            ],
          },
        ),
      );
      f(prefixGradients, { match: /a\sx/ }, (browsers) => {
        browsers = browsers.map((i) => {
          if (/firefox|op/.test(i)) {
            return i;
          } else {
            return `${i} old`;
          }
        });
        return add(
          [
            "linear-gradient",
            "repeating-linear-gradient",
            "radial-gradient",
            "repeating-radial-gradient",
          ],
          { browsers, feature: "css-gradients" },
        );
      });
      let prefixBoxsizing = __nccwpck_require__(6597);
      f(prefixBoxsizing, (browsers) =>
        prefix(["box-sizing"], { browsers, feature: "css3-boxsizing" }),
      );
      let prefixFilters = __nccwpck_require__(3882);
      f(prefixFilters, (browsers) =>
        prefix(["filter"], { browsers, feature: "css-filters" }),
      );
      let prefixFilterFunction = __nccwpck_require__(1545);
      f(prefixFilterFunction, (browsers) =>
        prefix(["filter-function"], {
          browsers,
          feature: "css-filter-function",
          props: [
            "background",
            "background-image",
            "border-image",
            "mask",
            "list-style",
            "list-style-image",
            "content",
            "mask-image",
          ],
        }),
      );
      let prefixBackdropFilter = __nccwpck_require__(3166);
      f(prefixBackdropFilter, { match: /y\sx|y\s#2/ }, (browsers) =>
        prefix(["backdrop-filter"], {
          browsers,
          feature: "css-backdrop-filter",
        }),
      );
      let prefixElementFunction = __nccwpck_require__(7801);
      f(prefixElementFunction, (browsers) =>
        prefix(["element"], {
          browsers,
          feature: "css-element-function",
          props: [
            "background",
            "background-image",
            "border-image",
            "mask",
            "list-style",
            "list-style-image",
            "content",
            "mask-image",
          ],
        }),
      );
      let prefixMulticolumns = __nccwpck_require__(7809);
      f(prefixMulticolumns, (browsers) => {
        prefix(
          [
            "columns",
            "column-width",
            "column-gap",
            "column-rule",
            "column-rule-color",
            "column-rule-width",
            "column-count",
            "column-rule-style",
            "column-span",
            "column-fill",
          ],
          { browsers, feature: "multicolumn" },
        );
        let noff = browsers.filter((i) => !/firefox/.test(i));
        prefix(["break-before", "break-after", "break-inside"], {
          browsers: noff,
          feature: "multicolumn",
        });
      });
      let prefixUserSelect = __nccwpck_require__(9474);
      f(prefixUserSelect, (browsers) =>
        prefix(["user-select"], {
          browsers,
          feature: "user-select-none",
          mistakes: ["-khtml-"],
        }),
      );
      let prefixFlexbox = __nccwpck_require__(4618);
      f(prefixFlexbox, { match: /a\sx/ }, (browsers) => {
        browsers = browsers.map((i) => {
          if (/ie|firefox/.test(i)) {
            return i;
          } else {
            return `${i} 2009`;
          }
        });
        prefix(["display-flex", "inline-flex"], {
          browsers,
          feature: "flexbox",
          props: ["display"],
        });
        prefix(["flex", "flex-grow", "flex-shrink", "flex-basis"], {
          browsers,
          feature: "flexbox",
        });
        prefix(
          [
            "flex-direction",
            "flex-wrap",
            "flex-flow",
            "justify-content",
            "order",
            "align-items",
            "align-self",
            "align-content",
          ],
          { browsers, feature: "flexbox" },
        );
      });
      f(prefixFlexbox, { match: /y\sx/ }, (browsers) => {
        add(["display-flex", "inline-flex"], { browsers, feature: "flexbox" });
        add(["flex", "flex-grow", "flex-shrink", "flex-basis"], {
          browsers,
          feature: "flexbox",
        });
        add(
          [
            "flex-direction",
            "flex-wrap",
            "flex-flow",
            "justify-content",
            "order",
            "align-items",
            "align-self",
            "align-content",
          ],
          { browsers, feature: "flexbox" },
        );
      });
      let prefixCalc = __nccwpck_require__(3098);
      f(prefixCalc, (browsers) =>
        prefix(["calc"], { browsers, feature: "calc", props: ["*"] }),
      );
      let prefixBackgroundOptions = __nccwpck_require__(1188);
      f(prefixBackgroundOptions, (browsers) =>
        prefix(["background-origin", "background-size"], {
          browsers,
          feature: "background-img-opts",
        }),
      );
      let prefixBackgroundClipText = __nccwpck_require__(5591);
      f(prefixBackgroundClipText, (browsers) =>
        prefix(["background-clip"], {
          browsers,
          feature: "background-clip-text",
        }),
      );
      let prefixFontFeature = __nccwpck_require__(1328);
      f(prefixFontFeature, (browsers) =>
        prefix(
          [
            "font-feature-settings",
            "font-variant-ligatures",
            "font-language-override",
          ],
          { browsers, feature: "font-feature" },
        ),
      );
      let prefixFontKerning = __nccwpck_require__(3944);
      f(prefixFontKerning, (browsers) =>
        prefix(["font-kerning"], { browsers, feature: "font-kerning" }),
      );
      let prefixBorderImage = __nccwpck_require__(7097);
      f(prefixBorderImage, (browsers) =>
        prefix(["border-image"], { browsers, feature: "border-image" }),
      );
      let prefixSelection = __nccwpck_require__(4822);
      f(prefixSelection, (browsers) =>
        prefix(["::selection"], {
          browsers,
          feature: "css-selection",
          selector: true,
        }),
      );
      let prefixPlaceholder = __nccwpck_require__(6215);
      f(prefixPlaceholder, (browsers) => {
        prefix(["::placeholder"], {
          browsers: browsers.concat([
            "ie 10 old",
            "ie 11 old",
            "firefox 18 old",
          ]),
          feature: "css-placeholder",
          selector: true,
        });
      });
      let prefixPlaceholderShown = __nccwpck_require__(9278);
      f(prefixPlaceholderShown, (browsers) => {
        prefix([":placeholder-shown"], {
          browsers,
          feature: "css-placeholder-shown",
          selector: true,
        });
      });
      let prefixHyphens = __nccwpck_require__(5197);
      f(prefixHyphens, (browsers) =>
        prefix(["hyphens"], { browsers, feature: "css-hyphens" }),
      );
      let prefixFullscreen = __nccwpck_require__(7766);
      f(prefixFullscreen, (browsers) =>
        prefix([":fullscreen"], {
          browsers,
          feature: "fullscreen",
          selector: true,
        }),
      );
      let prefixBackdrop = __nccwpck_require__(4643);
      f(prefixBackdrop, (browsers) =>
        prefix(["::backdrop"], {
          browsers,
          feature: "backdrop",
          selector: true,
        }),
      );
      let prefixFileSelectorButton = __nccwpck_require__(2416);
      f(prefixFileSelectorButton, (browsers) =>
        prefix(["::file-selector-button"], {
          browsers,
          feature: "file-selector-button",
          selector: true,
        }),
      );
      let prefixAutofill = __nccwpck_require__(7721);
      f(prefixAutofill, (browsers) =>
        prefix([":autofill"], {
          browsers,
          feature: "css-autofill",
          selector: true,
        }),
      );
      let prefixTabsize = __nccwpck_require__(3247);
      f(prefixTabsize, (browsers) =>
        prefix(["tab-size"], { browsers, feature: "css3-tabsize" }),
      );
      let prefixIntrinsic = __nccwpck_require__(5691);
      let sizeProps = [
        "width",
        "min-width",
        "max-width",
        "height",
        "min-height",
        "max-height",
        "inline-size",
        "min-inline-size",
        "max-inline-size",
        "block-size",
        "min-block-size",
        "max-block-size",
        "grid",
        "grid-template",
        "grid-template-rows",
        "grid-template-columns",
        "grid-auto-columns",
        "grid-auto-rows",
      ];
      f(prefixIntrinsic, (browsers) =>
        prefix(["max-content", "min-content"], {
          browsers,
          feature: "intrinsic-width",
          props: sizeProps,
        }),
      );
      f(prefixIntrinsic, { match: /x|\s#4/ }, (browsers) =>
        prefix(["fill", "fill-available"], {
          browsers,
          feature: "intrinsic-width",
          props: sizeProps,
        }),
      );
      f(prefixIntrinsic, { match: /x|\s#5/ }, (browsers) => {
        let ffFix = browsers.filter((i) => {
          let [name, version] = i.split(" ");
          if (name === "firefox" || name === "and_ff") {
            return parseInt(version) < 94;
          } else {
            return true;
          }
        });
        return prefix(["fit-content"], {
          browsers: ffFix,
          feature: "intrinsic-width",
          props: sizeProps,
        });
      });
      let prefixStretch = __nccwpck_require__(7437);
      f(prefixStretch, (browsers) =>
        prefix(["stretch"], {
          browsers,
          feature: "css-width-stretch",
          props: sizeProps,
        }),
      );
      let prefixCursorsNewer = __nccwpck_require__(8265);
      f(prefixCursorsNewer, (browsers) =>
        prefix(["zoom-in", "zoom-out"], {
          browsers,
          feature: "css3-cursors-newer",
          props: ["cursor"],
        }),
      );
      let prefixCursorsGrab = __nccwpck_require__(2983);
      f(prefixCursorsGrab, (browsers) =>
        prefix(["grab", "grabbing"], {
          browsers,
          feature: "css3-cursors-grab",
          props: ["cursor"],
        }),
      );
      let prefixSticky = __nccwpck_require__(8235);
      f(prefixSticky, (browsers) =>
        prefix(["sticky"], {
          browsers,
          feature: "css-sticky",
          props: ["position"],
        }),
      );
      let prefixPointer = __nccwpck_require__(1014);
      f(prefixPointer, (browsers) =>
        prefix(["touch-action"], { browsers, feature: "pointer" }),
      );
      let prefixDecoration = __nccwpck_require__(134);
      f(prefixDecoration, { match: /x.*#[235]/ }, (browsers) =>
        prefix(["text-decoration-skip", "text-decoration-skip-ink"], {
          browsers,
          feature: "text-decoration",
        }),
      );
      let prefixDecorationShorthand = __nccwpck_require__(1597);
      f(prefixDecorationShorthand, (browsers) =>
        prefix(["text-decoration"], { browsers, feature: "text-decoration" }),
      );
      let prefixDecorationColor = __nccwpck_require__(5934);
      f(prefixDecorationColor, (browsers) =>
        prefix(["text-decoration-color"], {
          browsers,
          feature: "text-decoration",
        }),
      );
      let prefixDecorationLine = __nccwpck_require__(3874);
      f(prefixDecorationLine, (browsers) =>
        prefix(["text-decoration-line"], {
          browsers,
          feature: "text-decoration",
        }),
      );
      let prefixDecorationStyle = __nccwpck_require__(3480);
      f(prefixDecorationStyle, (browsers) =>
        prefix(["text-decoration-style"], {
          browsers,
          feature: "text-decoration",
        }),
      );
      let prefixTextSizeAdjust = __nccwpck_require__(744);
      f(prefixTextSizeAdjust, (browsers) =>
        prefix(["text-size-adjust"], { browsers, feature: "text-size-adjust" }),
      );
      let prefixCssMasks = __nccwpck_require__(6649);
      f(prefixCssMasks, (browsers) => {
        prefix(
          [
            "mask-clip",
            "mask-composite",
            "mask-image",
            "mask-origin",
            "mask-repeat",
            "mask-border-repeat",
            "mask-border-source",
          ],
          { browsers, feature: "css-masks" },
        );
        prefix(
          [
            "mask",
            "mask-position",
            "mask-size",
            "mask-border",
            "mask-border-outset",
            "mask-border-width",
            "mask-border-slice",
          ],
          { browsers, feature: "css-masks" },
        );
      });
      let prefixClipPath = __nccwpck_require__(9205);
      f(prefixClipPath, (browsers) =>
        prefix(["clip-path"], { browsers, feature: "css-clip-path" }),
      );
      let prefixBoxdecoration = __nccwpck_require__(6781);
      f(prefixBoxdecoration, (browsers) =>
        prefix(["box-decoration-break"], {
          browsers,
          feature: "css-boxdecorationbreak",
        }),
      );
      let prefixObjectFit = __nccwpck_require__(1480);
      f(prefixObjectFit, (browsers) =>
        prefix(["object-fit", "object-position"], {
          browsers,
          feature: "object-fit",
        }),
      );
      let prefixShapes = __nccwpck_require__(5460);
      f(prefixShapes, (browsers) =>
        prefix(["shape-margin", "shape-outside", "shape-image-threshold"], {
          browsers,
          feature: "css-shapes",
        }),
      );
      let prefixTextOverflow = __nccwpck_require__(7806);
      f(prefixTextOverflow, (browsers) =>
        prefix(["text-overflow"], { browsers, feature: "text-overflow" }),
      );
      let prefixDeviceadaptation = __nccwpck_require__(3504);
      f(prefixDeviceadaptation, (browsers) =>
        prefix(["@viewport"], { browsers, feature: "css-deviceadaptation" }),
      );
      let prefixResolut = __nccwpck_require__(8181);
      f(prefixResolut, { match: /( x($| )|a #2)/ }, (browsers) =>
        prefix(["@resolution"], { browsers, feature: "css-media-resolution" }),
      );
      let prefixTextAlignLast = __nccwpck_require__(2807);
      f(prefixTextAlignLast, (browsers) =>
        prefix(["text-align-last"], {
          browsers,
          feature: "css-text-align-last",
        }),
      );
      let prefixCrispedges = __nccwpck_require__(8995);
      f(prefixCrispedges, { match: /y x|a x #1/ }, (browsers) =>
        prefix(["pixelated"], {
          browsers,
          feature: "css-crisp-edges",
          props: ["image-rendering"],
        }),
      );
      f(prefixCrispedges, { match: /a x #2/ }, (browsers) =>
        prefix(["image-rendering"], { browsers, feature: "css-crisp-edges" }),
      );
      let prefixLogicalProps = __nccwpck_require__(7395);
      f(prefixLogicalProps, (browsers) =>
        prefix(
          [
            "border-inline-start",
            "border-inline-end",
            "margin-inline-start",
            "margin-inline-end",
            "padding-inline-start",
            "padding-inline-end",
          ],
          { browsers, feature: "css-logical-props" },
        ),
      );
      f(prefixLogicalProps, { match: /x\s#2/ }, (browsers) =>
        prefix(
          [
            "border-block-start",
            "border-block-end",
            "margin-block-start",
            "margin-block-end",
            "padding-block-start",
            "padding-block-end",
          ],
          { browsers, feature: "css-logical-props" },
        ),
      );
      let prefixAppearance = __nccwpck_require__(4773);
      f(prefixAppearance, { match: /#2|x/ }, (browsers) =>
        prefix(["appearance"], { browsers, feature: "css-appearance" }),
      );
      let prefixSnappoints = __nccwpck_require__(1340);
      f(prefixSnappoints, (browsers) =>
        prefix(
          [
            "scroll-snap-type",
            "scroll-snap-coordinate",
            "scroll-snap-destination",
            "scroll-snap-points-x",
            "scroll-snap-points-y",
          ],
          { browsers, feature: "css-snappoints" },
        ),
      );
      let prefixRegions = __nccwpck_require__(1949);
      f(prefixRegions, (browsers) =>
        prefix(["flow-into", "flow-from", "region-fragment"], {
          browsers,
          feature: "css-regions",
        }),
      );
      let prefixImageSet = __nccwpck_require__(2237);
      f(prefixImageSet, (browsers) =>
        prefix(["image-set"], {
          browsers,
          feature: "css-image-set",
          props: [
            "background",
            "background-image",
            "border-image",
            "cursor",
            "mask",
            "mask-image",
            "list-style",
            "list-style-image",
            "content",
          ],
        }),
      );
      let prefixWritingMode = __nccwpck_require__(2298);
      f(prefixWritingMode, { match: /a|x/ }, (browsers) =>
        prefix(["writing-mode"], { browsers, feature: "css-writing-mode" }),
      );
      let prefixCrossFade = __nccwpck_require__(8786);
      f(prefixCrossFade, (browsers) =>
        prefix(["cross-fade"], {
          browsers,
          feature: "css-cross-fade",
          props: [
            "background",
            "background-image",
            "border-image",
            "mask",
            "list-style",
            "list-style-image",
            "content",
            "mask-image",
          ],
        }),
      );
      let prefixReadOnly = __nccwpck_require__(3489);
      f(prefixReadOnly, (browsers) =>
        prefix([":read-only", ":read-write"], {
          browsers,
          feature: "css-read-only-write",
          selector: true,
        }),
      );
      let prefixTextEmphasis = __nccwpck_require__(5514);
      f(prefixTextEmphasis, (browsers) =>
        prefix(
          [
            "text-emphasis",
            "text-emphasis-position",
            "text-emphasis-style",
            "text-emphasis-color",
          ],
          { browsers, feature: "text-emphasis" },
        ),
      );
      let prefixGrid = __nccwpck_require__(6554);
      f(prefixGrid, (browsers) => {
        prefix(["display-grid", "inline-grid"], {
          browsers,
          feature: "css-grid",
          props: ["display"],
        });
        prefix(
          [
            "grid-template-columns",
            "grid-template-rows",
            "grid-row-start",
            "grid-column-start",
            "grid-row-end",
            "grid-column-end",
            "grid-row",
            "grid-column",
            "grid-area",
            "grid-template",
            "grid-template-areas",
            "place-self",
          ],
          { browsers, feature: "css-grid" },
        );
      });
      f(prefixGrid, { match: /a x/ }, (browsers) =>
        prefix(["grid-column-align", "grid-row-align"], {
          browsers,
          feature: "css-grid",
        }),
      );
      let prefixTextSpacing = __nccwpck_require__(9290);
      f(prefixTextSpacing, (browsers) =>
        prefix(["text-spacing"], { browsers, feature: "css-text-spacing" }),
      );
      let prefixAnyLink = __nccwpck_require__(9323);
      f(prefixAnyLink, (browsers) =>
        prefix([":any-link"], {
          browsers,
          feature: "css-any-link",
          selector: true,
        }),
      );
      let bidiIsolate = __nccwpck_require__(7856);
      f(bidiIsolate, (browsers) =>
        prefix(["isolate"], {
          browsers,
          feature: "css-unicode-bidi",
          props: ["unicode-bidi"],
        }),
      );
      let bidiPlaintext = __nccwpck_require__(6097);
      f(bidiPlaintext, (browsers) =>
        prefix(["plaintext"], {
          browsers,
          feature: "css-unicode-bidi",
          props: ["unicode-bidi"],
        }),
      );
      let bidiOverride = __nccwpck_require__(9067);
      f(bidiOverride, { match: /y x/ }, (browsers) =>
        prefix(["isolate-override"], {
          browsers,
          feature: "css-unicode-bidi",
          props: ["unicode-bidi"],
        }),
      );
      let prefixOverscroll = __nccwpck_require__(3898);
      f(prefixOverscroll, { match: /a #1/ }, (browsers) =>
        prefix(["overscroll-behavior"], {
          browsers,
          feature: "css-overscroll-behavior",
        }),
      );
      let prefixTextOrientation = __nccwpck_require__(4838);
      f(prefixTextOrientation, (browsers) =>
        prefix(["text-orientation"], {
          browsers,
          feature: "css-text-orientation",
        }),
      );
      let prefixPrintAdjust = __nccwpck_require__(8066);
      f(prefixPrintAdjust, (browsers) =>
        prefix(["print-color-adjust", "color-adjust"], {
          browsers,
          feature: "css-print-color-adjust",
        }),
      );
    },
    7170: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Prefixer = __nccwpck_require__(6579);
      class AtRule extends Prefixer {
        add(rule, prefix) {
          let prefixed = prefix + rule.name;
          let already = rule.parent.some(
            (i) => i.name === prefixed && i.params === rule.params,
          );
          if (already) {
            return undefined;
          }
          let cloned = this.clone(rule, { name: prefixed });
          return rule.parent.insertBefore(rule, cloned);
        }
        process(node) {
          let parent = this.parentPrefix(node);
          for (let prefix of this.prefixes) {
            if (!parent || parent === prefix) {
              this.add(node, prefix);
            }
          }
        }
      }
      module.exports = AtRule;
    },
    1376: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let browserslist = __nccwpck_require__(5478);
      let { agents } = __nccwpck_require__(3768);
      let pico = __nccwpck_require__(7023);
      let Browsers = __nccwpck_require__(931);
      let Prefixes = __nccwpck_require__(5396);
      let dataPrefixes = __nccwpck_require__(9659);
      let getInfo = __nccwpck_require__(3028);
      let autoprefixerData = { browsers: agents, prefixes: dataPrefixes };
      const WARNING =
        "\n" +
        "  Replace Autoprefixer `browsers` option to Browserslist config.\n" +
        "  Use `browserslist` key in `package.json` or `.browserslistrc` file.\n" +
        "\n" +
        "  Using `browsers` option can cause errors. Browserslist config can\n" +
        "  be used for Babel, Autoprefixer, postcss-normalize and other tools.\n" +
        "\n" +
        "  If you really need to use option, rename it to `overrideBrowserslist`.\n" +
        "\n" +
        "  Learn more at:\n" +
        "  https://github.com/browserslist/browserslist#readme\n" +
        "  https://twitter.com/browserslist\n" +
        "\n";
      function isPlainObject(obj) {
        return Object.prototype.toString.apply(obj) === "[object Object]";
      }
      let cache = new Map();
      function timeCapsule(result, prefixes) {
        if (prefixes.browsers.selected.length === 0) {
          return;
        }
        if (prefixes.add.selectors.length > 0) {
          return;
        }
        if (Object.keys(prefixes.add).length > 2) {
          return;
        }
        result.warn(
          "Autoprefixer target browsers do not need any prefixes." +
            "You do not need Autoprefixer anymore.\n" +
            "Check your Browserslist config to be sure that your targets " +
            "are set up correctly.\n" +
            "\n" +
            "  Learn more at:\n" +
            "  https://github.com/postcss/autoprefixer#readme\n" +
            "  https://github.com/browserslist/browserslist#readme\n" +
            "\n",
        );
      }
      module.exports = plugin;
      function plugin(...reqs) {
        let options;
        if (reqs.length === 1 && isPlainObject(reqs[0])) {
          options = reqs[0];
          reqs = undefined;
        } else if (reqs.length === 0 || (reqs.length === 1 && !reqs[0])) {
          reqs = undefined;
        } else if (reqs.length <= 2 && (Array.isArray(reqs[0]) || !reqs[0])) {
          options = reqs[1];
          reqs = reqs[0];
        } else if (typeof reqs[reqs.length - 1] === "object") {
          options = reqs.pop();
        }
        if (!options) {
          options = {};
        }
        if (options.browser) {
          throw new Error(
            "Change `browser` option to `overrideBrowserslist` in Autoprefixer",
          );
        } else if (options.browserslist) {
          throw new Error(
            "Change `browserslist` option to `overrideBrowserslist` in Autoprefixer",
          );
        }
        if (options.overrideBrowserslist) {
          reqs = options.overrideBrowserslist;
        } else if (options.browsers) {
          if (typeof console !== "undefined" && console.warn) {
            console.warn(
              pico.red(
                WARNING.replace(/`[^`]+`/g, (i) => pico.yellow(i.slice(1, -1))),
              ),
            );
          }
          reqs = options.browsers;
        }
        let brwlstOpts = {
          env: options.env,
          ignoreUnknownVersions: options.ignoreUnknownVersions,
          stats: options.stats,
        };
        function loadPrefixes(opts) {
          let d = autoprefixerData;
          let browsers = new Browsers(d.browsers, reqs, opts, brwlstOpts);
          let key = browsers.selected.join(", ") + JSON.stringify(options);
          if (!cache.has(key)) {
            cache.set(key, new Prefixes(d.prefixes, browsers, options));
          }
          return cache.get(key);
        }
        return {
          browsers: reqs,
          info(opts) {
            opts = opts || {};
            opts.from = opts.from || process.cwd();
            return getInfo(loadPrefixes(opts));
          },
          options,
          postcssPlugin: "autoprefixer",
          prepare(result) {
            let prefixes = loadPrefixes({
              env: options.env,
              from: result.opts.from,
            });
            return {
              OnceExit(root) {
                timeCapsule(result, prefixes);
                if (options.remove !== false) {
                  prefixes.processor.remove(root, result);
                }
                if (options.add !== false) {
                  prefixes.processor.add(root, result);
                }
              },
            };
          },
        };
      }
      plugin.postcss = true;
      plugin.data = autoprefixerData;
      plugin.defaults = browserslist.defaults;
      plugin.info = () => plugin().info();
    },
    9137: (module) => {
      function last(array) {
        return array[array.length - 1];
      }
      let brackets = {
        parse(str) {
          let current = [""];
          let stack = [current];
          for (let sym of str) {
            if (sym === "(") {
              current = [""];
              last(stack).push(current);
              stack.push(current);
              continue;
            }
            if (sym === ")") {
              stack.pop();
              current = last(stack);
              current.push("");
              continue;
            }
            current[current.length - 1] += sym;
          }
          return stack[0];
        },
        stringify(ast) {
          let result = "";
          for (let i of ast) {
            if (typeof i === "object") {
              result += `(${brackets.stringify(i)})`;
              continue;
            }
            result += i;
          }
          return result;
        },
      };
      module.exports = brackets;
    },
    931: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let browserslist = __nccwpck_require__(5478);
      let { agents } = __nccwpck_require__(3768);
      let utils = __nccwpck_require__(6584);
      class Browsers {
        constructor(data, requirements, options, browserslistOpts) {
          this.data = data;
          this.options = options || {};
          this.browserslistOpts = browserslistOpts || {};
          this.selected = this.parse(requirements);
        }
        static prefixes() {
          if (this.prefixesCache) {
            return this.prefixesCache;
          }
          this.prefixesCache = [];
          for (let name in agents) {
            this.prefixesCache.push(`-${agents[name].prefix}-`);
          }
          this.prefixesCache = utils
            .uniq(this.prefixesCache)
            .sort((a, b) => b.length - a.length);
          return this.prefixesCache;
        }
        static withPrefix(value) {
          if (!this.prefixesRegexp) {
            this.prefixesRegexp = new RegExp(this.prefixes().join("|"));
          }
          return this.prefixesRegexp.test(value);
        }
        isSelected(browser) {
          return this.selected.includes(browser);
        }
        parse(requirements) {
          let opts = {};
          for (let i in this.browserslistOpts) {
            opts[i] = this.browserslistOpts[i];
          }
          opts.path = this.options.from;
          return browserslist(requirements, opts);
        }
        prefix(browser) {
          let [name, version] = browser.split(" ");
          let data = this.data[name];
          let prefix =
            data.prefix_exceptions && data.prefix_exceptions[version];
          if (!prefix) {
            prefix = data.prefix;
          }
          return `-${prefix}-`;
        }
      }
      module.exports = Browsers;
    },
    9011: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Prefixer = __nccwpck_require__(6579);
      let Browsers = __nccwpck_require__(931);
      let utils = __nccwpck_require__(6584);
      class Declaration extends Prefixer {
        add(decl, prefix, prefixes, result) {
          let prefixed = this.prefixed(decl.prop, prefix);
          if (
            this.isAlready(decl, prefixed) ||
            this.otherPrefixes(decl.value, prefix)
          ) {
            return undefined;
          }
          return this.insert(decl, prefix, prefixes, result);
        }
        calcBefore(prefixes, decl, prefix = "") {
          let max = this.maxPrefixed(prefixes, decl);
          let diff = max - utils.removeNote(prefix).length;
          let before = decl.raw("before");
          if (diff > 0) {
            before += Array(diff).fill(" ").join("");
          }
          return before;
        }
        check() {
          return true;
        }
        insert(decl, prefix, prefixes) {
          let cloned = this.set(this.clone(decl), prefix);
          if (!cloned) return undefined;
          let already = decl.parent.some(
            (i) => i.prop === cloned.prop && i.value === cloned.value,
          );
          if (already) {
            return undefined;
          }
          if (this.needCascade(decl)) {
            cloned.raws.before = this.calcBefore(prefixes, decl, prefix);
          }
          return decl.parent.insertBefore(decl, cloned);
        }
        isAlready(decl, prefixed) {
          let already = this.all.group(decl).up((i) => i.prop === prefixed);
          if (!already) {
            already = this.all.group(decl).down((i) => i.prop === prefixed);
          }
          return already;
        }
        maxPrefixed(prefixes, decl) {
          if (decl._autoprefixerMax) {
            return decl._autoprefixerMax;
          }
          let max = 0;
          for (let prefix of prefixes) {
            prefix = utils.removeNote(prefix);
            if (prefix.length > max) {
              max = prefix.length;
            }
          }
          decl._autoprefixerMax = max;
          return decl._autoprefixerMax;
        }
        needCascade(decl) {
          if (!decl._autoprefixerCascade) {
            decl._autoprefixerCascade =
              this.all.options.cascade !== false &&
              decl.raw("before").includes("\n");
          }
          return decl._autoprefixerCascade;
        }
        normalize(prop) {
          return prop;
        }
        old(prop, prefix) {
          return [this.prefixed(prop, prefix)];
        }
        otherPrefixes(value, prefix) {
          for (let other of Browsers.prefixes()) {
            if (other === prefix) {
              continue;
            }
            if (value.includes(other)) {
              return value.replace(/var\([^)]+\)/, "").includes(other);
            }
          }
          return false;
        }
        prefixed(prop, prefix) {
          return prefix + prop;
        }
        process(decl, result) {
          if (!this.needCascade(decl)) {
            super.process(decl, result);
            return;
          }
          let prefixes = super.process(decl, result);
          if (!prefixes || !prefixes.length) {
            return;
          }
          this.restoreBefore(decl);
          decl.raws.before = this.calcBefore(prefixes, decl);
        }
        restoreBefore(decl) {
          let lines = decl.raw("before").split("\n");
          let min = lines[lines.length - 1];
          this.all.group(decl).up((prefixed) => {
            let array = prefixed.raw("before").split("\n");
            let last = array[array.length - 1];
            if (last.length < min.length) {
              min = last;
            }
          });
          lines[lines.length - 1] = min;
          decl.raws.before = lines.join("\n");
        }
        set(decl, prefix) {
          decl.prop = this.prefixed(decl.prop, prefix);
          return decl;
        }
      }
      module.exports = Declaration;
    },
    6788: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let flexSpec = __nccwpck_require__(3713);
      let Declaration = __nccwpck_require__(9011);
      class AlignContent extends Declaration {
        normalize() {
          return "align-content";
        }
        prefixed(prop, prefix) {
          let spec;
          [spec, prefix] = flexSpec(prefix);
          if (spec === 2012) {
            return prefix + "flex-line-pack";
          }
          return super.prefixed(prop, prefix);
        }
        set(decl, prefix) {
          let spec = flexSpec(prefix)[0];
          if (spec === 2012) {
            decl.value = AlignContent.oldValues[decl.value] || decl.value;
            return super.set(decl, prefix);
          }
          if (spec === "final") {
            return super.set(decl, prefix);
          }
          return undefined;
        }
      }
      AlignContent.names = ["align-content", "flex-line-pack"];
      AlignContent.oldValues = {
        "flex-end": "end",
        "flex-start": "start",
        "space-around": "distribute",
        "space-between": "justify",
      };
      module.exports = AlignContent;
    },
    2478: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let flexSpec = __nccwpck_require__(3713);
      let Declaration = __nccwpck_require__(9011);
      class AlignItems extends Declaration {
        normalize() {
          return "align-items";
        }
        prefixed(prop, prefix) {
          let spec;
          [spec, prefix] = flexSpec(prefix);
          if (spec === 2009) {
            return prefix + "box-align";
          }
          if (spec === 2012) {
            return prefix + "flex-align";
          }
          return super.prefixed(prop, prefix);
        }
        set(decl, prefix) {
          let spec = flexSpec(prefix)[0];
          if (spec === 2009 || spec === 2012) {
            decl.value = AlignItems.oldValues[decl.value] || decl.value;
          }
          return super.set(decl, prefix);
        }
      }
      AlignItems.names = ["align-items", "flex-align", "box-align"];
      AlignItems.oldValues = { "flex-end": "end", "flex-start": "start" };
      module.exports = AlignItems;
    },
    119: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let flexSpec = __nccwpck_require__(3713);
      let Declaration = __nccwpck_require__(9011);
      class AlignSelf extends Declaration {
        check(decl) {
          return (
            decl.parent &&
            !decl.parent.some((i) => i.prop && i.prop.startsWith("grid-"))
          );
        }
        normalize() {
          return "align-self";
        }
        prefixed(prop, prefix) {
          let spec;
          [spec, prefix] = flexSpec(prefix);
          if (spec === 2012) {
            return prefix + "flex-item-align";
          }
          return super.prefixed(prop, prefix);
        }
        set(decl, prefix) {
          let spec = flexSpec(prefix)[0];
          if (spec === 2012) {
            decl.value = AlignSelf.oldValues[decl.value] || decl.value;
            return super.set(decl, prefix);
          }
          if (spec === "final") {
            return super.set(decl, prefix);
          }
          return undefined;
        }
      }
      AlignSelf.names = ["align-self", "flex-item-align"];
      AlignSelf.oldValues = { "flex-end": "end", "flex-start": "start" };
      module.exports = AlignSelf;
    },
    7508: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      class Animation extends Declaration {
        check(decl) {
          return !decl.value.split(/\s+/).some((i) => {
            let lower = i.toLowerCase();
            return lower === "reverse" || lower === "alternate-reverse";
          });
        }
      }
      Animation.names = ["animation", "animation-direction"];
      module.exports = Animation;
    },
    3397: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      let utils = __nccwpck_require__(6584);
      class Appearance extends Declaration {
        constructor(name, prefixes, all) {
          super(name, prefixes, all);
          if (this.prefixes) {
            this.prefixes = utils.uniq(
              this.prefixes.map((i) => {
                if (i === "-ms-") {
                  return "-webkit-";
                }
                return i;
              }),
            );
          }
        }
      }
      Appearance.names = ["appearance"];
      module.exports = Appearance;
    },
    1242: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Selector = __nccwpck_require__(2098);
      let utils = __nccwpck_require__(6584);
      class Autofill extends Selector {
        constructor(name, prefixes, all) {
          super(name, prefixes, all);
          if (this.prefixes) {
            this.prefixes = utils.uniq(this.prefixes.map(() => "-webkit-"));
          }
        }
        prefixed(prefix) {
          if (prefix === "-webkit-") {
            return ":-webkit-autofill";
          }
          return `:${prefix}autofill`;
        }
      }
      Autofill.names = [":autofill"];
      module.exports = Autofill;
    },
    6667: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      let utils = __nccwpck_require__(6584);
      class BackdropFilter extends Declaration {
        constructor(name, prefixes, all) {
          super(name, prefixes, all);
          if (this.prefixes) {
            this.prefixes = utils.uniq(
              this.prefixes.map((i) => (i === "-ms-" ? "-webkit-" : i)),
            );
          }
        }
      }
      BackdropFilter.names = ["backdrop-filter"];
      module.exports = BackdropFilter;
    },
    2781: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      let utils = __nccwpck_require__(6584);
      class BackgroundClip extends Declaration {
        constructor(name, prefixes, all) {
          super(name, prefixes, all);
          if (this.prefixes) {
            this.prefixes = utils.uniq(
              this.prefixes.map((i) => (i === "-ms-" ? "-webkit-" : i)),
            );
          }
        }
        check(decl) {
          return decl.value.toLowerCase() === "text";
        }
      }
      BackgroundClip.names = ["background-clip"];
      module.exports = BackgroundClip;
    },
    7397: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      class BackgroundSize extends Declaration {
        set(decl, prefix) {
          let value = decl.value.toLowerCase();
          if (
            prefix === "-webkit-" &&
            !value.includes(" ") &&
            value !== "contain" &&
            value !== "cover"
          ) {
            decl.value = decl.value + " " + decl.value;
          }
          return super.set(decl, prefix);
        }
      }
      BackgroundSize.names = ["background-size"];
      module.exports = BackgroundSize;
    },
    1447: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      class BlockLogical extends Declaration {
        normalize(prop) {
          if (prop.includes("-before")) {
            return prop.replace("-before", "-block-start");
          }
          return prop.replace("-after", "-block-end");
        }
        prefixed(prop, prefix) {
          if (prop.includes("-start")) {
            return prefix + prop.replace("-block-start", "-before");
          }
          return prefix + prop.replace("-block-end", "-after");
        }
      }
      BlockLogical.names = [
        "border-block-start",
        "border-block-end",
        "margin-block-start",
        "margin-block-end",
        "padding-block-start",
        "padding-block-end",
        "border-before",
        "border-after",
        "margin-before",
        "margin-after",
        "padding-before",
        "padding-after",
      ];
      module.exports = BlockLogical;
    },
    2212: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      class BorderImage extends Declaration {
        set(decl, prefix) {
          decl.value = decl.value.replace(/\s+fill(\s)/, "$1");
          return super.set(decl, prefix);
        }
      }
      BorderImage.names = ["border-image"];
      module.exports = BorderImage;
    },
    189: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      class BorderRadius extends Declaration {
        normalize(prop) {
          return BorderRadius.toNormal[prop] || prop;
        }
        prefixed(prop, prefix) {
          if (prefix === "-moz-") {
            return prefix + (BorderRadius.toMozilla[prop] || prop);
          }
          return super.prefixed(prop, prefix);
        }
      }
      BorderRadius.names = ["border-radius"];
      BorderRadius.toMozilla = {};
      BorderRadius.toNormal = {};
      for (let ver of ["top", "bottom"]) {
        for (let hor of ["left", "right"]) {
          let normal = `border-${ver}-${hor}-radius`;
          let mozilla = `border-radius-${ver}${hor}`;
          BorderRadius.names.push(normal);
          BorderRadius.names.push(mozilla);
          BorderRadius.toMozilla[normal] = mozilla;
          BorderRadius.toNormal[mozilla] = normal;
        }
      }
      module.exports = BorderRadius;
    },
    6946: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      class BreakProps extends Declaration {
        insert(decl, prefix, prefixes) {
          if (decl.prop !== "break-inside") {
            return super.insert(decl, prefix, prefixes);
          }
          if (/region/i.test(decl.value) || /page/i.test(decl.value)) {
            return undefined;
          }
          return super.insert(decl, prefix, prefixes);
        }
        normalize(prop) {
          if (prop.includes("inside")) {
            return "break-inside";
          }
          if (prop.includes("before")) {
            return "break-before";
          }
          return "break-after";
        }
        prefixed(prop, prefix) {
          return `${prefix}column-${prop}`;
        }
        set(decl, prefix) {
          if (
            (decl.prop === "break-inside" && decl.value === "avoid-column") ||
            decl.value === "avoid-page"
          ) {
            decl.value = "avoid";
          }
          return super.set(decl, prefix);
        }
      }
      BreakProps.names = [
        "break-inside",
        "page-break-inside",
        "column-break-inside",
        "break-before",
        "page-break-before",
        "column-break-before",
        "break-after",
        "page-break-after",
        "column-break-after",
      ];
      module.exports = BreakProps;
    },
    2315: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let list = __nccwpck_require__(977).list;
      let Value = __nccwpck_require__(2530);
      class CrossFade extends Value {
        replace(string, prefix) {
          return list
            .space(string)
            .map((value) => {
              if (value.slice(0, +this.name.length + 1) !== this.name + "(") {
                return value;
              }
              let close = value.lastIndexOf(")");
              let after = value.slice(close + 1);
              let args = value.slice(this.name.length + 1, close);
              if (prefix === "-webkit-") {
                let match = args.match(/\d*.?\d+%?/);
                if (match) {
                  args = args.slice(match[0].length).trim();
                  args += `, ${match[0]}`;
                } else {
                  args += ", 0.5";
                }
              }
              return prefix + this.name + "(" + args + ")" + after;
            })
            .join(" ");
        }
      }
      CrossFade.names = ["cross-fade"];
      module.exports = CrossFade;
    },
    9470: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let flexSpec = __nccwpck_require__(3713);
      let OldValue = __nccwpck_require__(6029);
      let Value = __nccwpck_require__(2530);
      class DisplayFlex extends Value {
        constructor(name, prefixes) {
          super(name, prefixes);
          if (name === "display-flex") {
            this.name = "flex";
          }
        }
        check(decl) {
          return decl.prop === "display" && decl.value === this.name;
        }
        old(prefix) {
          let prefixed = this.prefixed(prefix);
          if (!prefixed) return undefined;
          return new OldValue(this.name, prefixed);
        }
        prefixed(prefix) {
          let spec, value;
          [spec, prefix] = flexSpec(prefix);
          if (spec === 2009) {
            if (this.name === "flex") {
              value = "box";
            } else {
              value = "inline-box";
            }
          } else if (spec === 2012) {
            if (this.name === "flex") {
              value = "flexbox";
            } else {
              value = "inline-flexbox";
            }
          } else if (spec === "final") {
            value = this.name;
          }
          return prefix + value;
        }
        replace(string, prefix) {
          return this.prefixed(prefix);
        }
      }
      DisplayFlex.names = ["display-flex", "inline-flex"];
      module.exports = DisplayFlex;
    },
    5643: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Value = __nccwpck_require__(2530);
      class DisplayGrid extends Value {
        constructor(name, prefixes) {
          super(name, prefixes);
          if (name === "display-grid") {
            this.name = "grid";
          }
        }
        check(decl) {
          return decl.prop === "display" && decl.value === this.name;
        }
      }
      DisplayGrid.names = ["display-grid", "inline-grid"];
      module.exports = DisplayGrid;
    },
    5407: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Selector = __nccwpck_require__(2098);
      let utils = __nccwpck_require__(6584);
      class FileSelectorButton extends Selector {
        constructor(name, prefixes, all) {
          super(name, prefixes, all);
          if (this.prefixes) {
            this.prefixes = utils.uniq(this.prefixes.map(() => "-webkit-"));
          }
        }
        prefixed(prefix) {
          if (prefix === "-webkit-") {
            return "::-webkit-file-upload-button";
          }
          return `::${prefix}file-selector-button`;
        }
      }
      FileSelectorButton.names = ["::file-selector-button"];
      module.exports = FileSelectorButton;
    },
    6122: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Value = __nccwpck_require__(2530);
      class FilterValue extends Value {
        constructor(name, prefixes) {
          super(name, prefixes);
          if (name === "filter-function") {
            this.name = "filter";
          }
        }
      }
      FilterValue.names = ["filter", "filter-function"];
      module.exports = FilterValue;
    },
    6437: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      class Filter extends Declaration {
        check(decl) {
          let v = decl.value;
          return (
            !v.toLowerCase().includes("alpha(") &&
            !v.includes("DXImageTransform.Microsoft") &&
            !v.includes("data:image/svg+xml")
          );
        }
      }
      Filter.names = ["filter"];
      module.exports = Filter;
    },
    3962: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let flexSpec = __nccwpck_require__(3713);
      let Declaration = __nccwpck_require__(9011);
      class FlexBasis extends Declaration {
        normalize() {
          return "flex-basis";
        }
        prefixed(prop, prefix) {
          let spec;
          [spec, prefix] = flexSpec(prefix);
          if (spec === 2012) {
            return prefix + "flex-preferred-size";
          }
          return super.prefixed(prop, prefix);
        }
        set(decl, prefix) {
          let spec;
          [spec, prefix] = flexSpec(prefix);
          if (spec === 2012 || spec === "final") {
            return super.set(decl, prefix);
          }
          return undefined;
        }
      }
      FlexBasis.names = ["flex-basis", "flex-preferred-size"];
      module.exports = FlexBasis;
    },
    912: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let flexSpec = __nccwpck_require__(3713);
      let Declaration = __nccwpck_require__(9011);
      class FlexDirection extends Declaration {
        insert(decl, prefix, prefixes) {
          let spec;
          [spec, prefix] = flexSpec(prefix);
          if (spec !== 2009) {
            return super.insert(decl, prefix, prefixes);
          }
          let already = decl.parent.some(
            (i) =>
              i.prop === prefix + "box-orient" ||
              i.prop === prefix + "box-direction",
          );
          if (already) {
            return undefined;
          }
          let v = decl.value;
          let orient, dir;
          if (v === "inherit" || v === "initial" || v === "unset") {
            orient = v;
            dir = v;
          } else {
            orient = v.includes("row") ? "horizontal" : "vertical";
            dir = v.includes("reverse") ? "reverse" : "normal";
          }
          let cloned = this.clone(decl);
          cloned.prop = prefix + "box-orient";
          cloned.value = orient;
          if (this.needCascade(decl)) {
            cloned.raws.before = this.calcBefore(prefixes, decl, prefix);
          }
          decl.parent.insertBefore(decl, cloned);
          cloned = this.clone(decl);
          cloned.prop = prefix + "box-direction";
          cloned.value = dir;
          if (this.needCascade(decl)) {
            cloned.raws.before = this.calcBefore(prefixes, decl, prefix);
          }
          return decl.parent.insertBefore(decl, cloned);
        }
        normalize() {
          return "flex-direction";
        }
        old(prop, prefix) {
          let spec;
          [spec, prefix] = flexSpec(prefix);
          if (spec === 2009) {
            return [prefix + "box-orient", prefix + "box-direction"];
          } else {
            return super.old(prop, prefix);
          }
        }
      }
      FlexDirection.names = ["flex-direction", "box-direction", "box-orient"];
      module.exports = FlexDirection;
    },
    9225: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let flexSpec = __nccwpck_require__(3713);
      let Declaration = __nccwpck_require__(9011);
      class FlexFlow extends Declaration {
        insert(decl, prefix, prefixes) {
          let spec;
          [spec, prefix] = flexSpec(prefix);
          if (spec !== 2009) {
            return super.insert(decl, prefix, prefixes);
          }
          let values = decl.value
            .split(/\s+/)
            .filter((i) => i !== "wrap" && i !== "nowrap" && "wrap-reverse");
          if (values.length === 0) {
            return undefined;
          }
          let already = decl.parent.some(
            (i) =>
              i.prop === prefix + "box-orient" ||
              i.prop === prefix + "box-direction",
          );
          if (already) {
            return undefined;
          }
          let value = values[0];
          let orient = value.includes("row") ? "horizontal" : "vertical";
          let dir = value.includes("reverse") ? "reverse" : "normal";
          let cloned = this.clone(decl);
          cloned.prop = prefix + "box-orient";
          cloned.value = orient;
          if (this.needCascade(decl)) {
            cloned.raws.before = this.calcBefore(prefixes, decl, prefix);
          }
          decl.parent.insertBefore(decl, cloned);
          cloned = this.clone(decl);
          cloned.prop = prefix + "box-direction";
          cloned.value = dir;
          if (this.needCascade(decl)) {
            cloned.raws.before = this.calcBefore(prefixes, decl, prefix);
          }
          return decl.parent.insertBefore(decl, cloned);
        }
      }
      FlexFlow.names = ["flex-flow", "box-direction", "box-orient"];
      module.exports = FlexFlow;
    },
    1708: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let flexSpec = __nccwpck_require__(3713);
      let Declaration = __nccwpck_require__(9011);
      class Flex extends Declaration {
        normalize() {
          return "flex";
        }
        prefixed(prop, prefix) {
          let spec;
          [spec, prefix] = flexSpec(prefix);
          if (spec === 2009) {
            return prefix + "box-flex";
          }
          if (spec === 2012) {
            return prefix + "flex-positive";
          }
          return super.prefixed(prop, prefix);
        }
      }
      Flex.names = ["flex-grow", "flex-positive"];
      module.exports = Flex;
    },
    1945: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let flexSpec = __nccwpck_require__(3713);
      let Declaration = __nccwpck_require__(9011);
      class FlexShrink extends Declaration {
        normalize() {
          return "flex-shrink";
        }
        prefixed(prop, prefix) {
          let spec;
          [spec, prefix] = flexSpec(prefix);
          if (spec === 2012) {
            return prefix + "flex-negative";
          }
          return super.prefixed(prop, prefix);
        }
        set(decl, prefix) {
          let spec;
          [spec, prefix] = flexSpec(prefix);
          if (spec === 2012 || spec === "final") {
            return super.set(decl, prefix);
          }
          return undefined;
        }
      }
      FlexShrink.names = ["flex-shrink", "flex-negative"];
      module.exports = FlexShrink;
    },
    3713: (module) => {
      module.exports = function (prefix) {
        let spec;
        if (prefix === "-webkit- 2009" || prefix === "-moz-") {
          spec = 2009;
        } else if (prefix === "-ms-") {
          spec = 2012;
        } else if (prefix === "-webkit-") {
          spec = "final";
        }
        if (prefix === "-webkit- 2009") {
          prefix = "-webkit-";
        }
        return [spec, prefix];
      };
    },
    4910: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let flexSpec = __nccwpck_require__(3713);
      let Declaration = __nccwpck_require__(9011);
      class FlexWrap extends Declaration {
        set(decl, prefix) {
          let spec = flexSpec(prefix)[0];
          if (spec !== 2009) {
            return super.set(decl, prefix);
          }
          return undefined;
        }
      }
      FlexWrap.names = ["flex-wrap"];
      module.exports = FlexWrap;
    },
    4190: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let list = __nccwpck_require__(977).list;
      let flexSpec = __nccwpck_require__(3713);
      let Declaration = __nccwpck_require__(9011);
      class Flex extends Declaration {
        normalize() {
          return "flex";
        }
        prefixed(prop, prefix) {
          let spec;
          [spec, prefix] = flexSpec(prefix);
          if (spec === 2009) {
            return prefix + "box-flex";
          }
          return super.prefixed(prop, prefix);
        }
        set(decl, prefix) {
          let spec = flexSpec(prefix)[0];
          if (spec === 2009) {
            decl.value = list.space(decl.value)[0];
            decl.value = Flex.oldValues[decl.value] || decl.value;
            return super.set(decl, prefix);
          }
          if (spec === 2012) {
            let components = list.space(decl.value);
            if (components.length === 3 && components[2] === "0") {
              decl.value = components.slice(0, 2).concat("0px").join(" ");
            }
          }
          return super.set(decl, prefix);
        }
      }
      Flex.names = ["flex", "box-flex"];
      Flex.oldValues = { auto: "1", none: "0" };
      module.exports = Flex;
    },
    5233: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Selector = __nccwpck_require__(2098);
      class Fullscreen extends Selector {
        prefixed(prefix) {
          if (prefix === "-webkit-") {
            return ":-webkit-full-screen";
          }
          if (prefix === "-moz-") {
            return ":-moz-full-screen";
          }
          return `:${prefix}fullscreen`;
        }
      }
      Fullscreen.names = [":fullscreen"];
      module.exports = Fullscreen;
    },
    9864: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let parser = __nccwpck_require__(9285);
      let range = __nccwpck_require__(4251);
      let OldValue = __nccwpck_require__(6029);
      let Value = __nccwpck_require__(2530);
      let utils = __nccwpck_require__(6584);
      let IS_DIRECTION = /top|left|right|bottom/gi;
      class Gradient extends Value {
        add(decl, prefix) {
          let p = decl.prop;
          if (p.includes("mask")) {
            if (prefix === "-webkit-" || prefix === "-webkit- old") {
              return super.add(decl, prefix);
            }
          } else if (
            p === "list-style" ||
            p === "list-style-image" ||
            p === "content"
          ) {
            if (prefix === "-webkit-" || prefix === "-webkit- old") {
              return super.add(decl, prefix);
            }
          } else {
            return super.add(decl, prefix);
          }
          return undefined;
        }
        cloneDiv(params) {
          for (let i of params) {
            if (i.type === "div" && i.value === ",") {
              return i;
            }
          }
          return { after: " ", type: "div", value: "," };
        }
        colorStops(params) {
          let result = [];
          for (let i = 0; i < params.length; i++) {
            let pos;
            let param = params[i];
            let item;
            if (i === 0) {
              continue;
            }
            let color = parser.stringify(param[0]);
            if (param[1] && param[1].type === "word") {
              pos = param[1].value;
            } else if (param[2] && param[2].type === "word") {
              pos = param[2].value;
            }
            let stop;
            if (i === 1 && (!pos || pos === "0%")) {
              stop = `from(${color})`;
            } else if (i === params.length - 1 && (!pos || pos === "100%")) {
              stop = `to(${color})`;
            } else if (pos) {
              stop = `color-stop(${pos}, ${color})`;
            } else {
              stop = `color-stop(${color})`;
            }
            let div = param[param.length - 1];
            params[i] = [{ type: "word", value: stop }];
            if (div.type === "div" && div.value === ",") {
              item = params[i].push(div);
            }
            result.push(item);
          }
          return result;
        }
        convertDirection(params) {
          if (params.length > 0) {
            if (params[0].value === "to") {
              this.fixDirection(params);
            } else if (params[0].value.includes("deg")) {
              this.fixAngle(params);
            } else if (this.isRadial(params)) {
              this.fixRadial(params);
            }
          }
          return params;
        }
        fixAngle(params) {
          let first = params[0].value;
          first = parseFloat(first);
          first = Math.abs(450 - first) % 360;
          first = this.roundFloat(first, 3);
          params[0].value = `${first}deg`;
        }
        fixDirection(params) {
          params.splice(0, 2);
          for (let param of params) {
            if (param.type === "div") {
              break;
            }
            if (param.type === "word") {
              param.value = this.revertDirection(param.value);
            }
          }
        }
        fixRadial(params) {
          let first = [];
          let second = [];
          let a, b, c, i, next;
          for (i = 0; i < params.length - 2; i++) {
            a = params[i];
            b = params[i + 1];
            c = params[i + 2];
            if (a.type === "space" && b.value === "at" && c.type === "space") {
              next = i + 3;
              break;
            } else {
              first.push(a);
            }
          }
          let div;
          for (i = next; i < params.length; i++) {
            if (params[i].type === "div") {
              div = params[i];
              break;
            } else {
              second.push(params[i]);
            }
          }
          params.splice(0, i, ...second, div, ...first);
        }
        isRadial(params) {
          let state = "before";
          for (let param of params) {
            if (state === "before" && param.type === "space") {
              state = "at";
            } else if (state === "at" && param.value === "at") {
              state = "after";
            } else if (state === "after" && param.type === "space") {
              return true;
            } else if (param.type === "div") {
              break;
            } else {
              state = "before";
            }
          }
          return false;
        }
        newDirection(params) {
          if (params[0].value === "to") {
            return params;
          }
          IS_DIRECTION.lastIndex = 0;
          if (!IS_DIRECTION.test(params[0].value)) {
            return params;
          }
          params.unshift(
            { type: "word", value: "to" },
            { type: "space", value: " " },
          );
          for (let i = 2; i < params.length; i++) {
            if (params[i].type === "div") {
              break;
            }
            if (params[i].type === "word") {
              params[i].value = this.revertDirection(params[i].value);
            }
          }
          return params;
        }
        normalize(nodes, gradientName) {
          if (!nodes[0]) return nodes;
          if (/-?\d+(.\d+)?grad/.test(nodes[0].value)) {
            nodes[0].value = this.normalizeUnit(nodes[0].value, 400);
          } else if (/-?\d+(.\d+)?rad/.test(nodes[0].value)) {
            nodes[0].value = this.normalizeUnit(nodes[0].value, 2 * Math.PI);
          } else if (/-?\d+(.\d+)?turn/.test(nodes[0].value)) {
            nodes[0].value = this.normalizeUnit(nodes[0].value, 1);
          } else if (nodes[0].value.includes("deg")) {
            let num = parseFloat(nodes[0].value);
            num = range.wrap(0, 360, num);
            nodes[0].value = `${num}deg`;
          }
          if (
            gradientName === "linear-gradient" ||
            gradientName === "repeating-linear-gradient"
          ) {
            let direction = nodes[0].value;
            if (direction === "0deg" || direction === "0") {
              nodes = this.replaceFirst(nodes, "to", " ", "top");
            } else if (direction === "90deg") {
              nodes = this.replaceFirst(nodes, "to", " ", "right");
            } else if (direction === "180deg") {
              nodes = this.replaceFirst(nodes, "to", " ", "bottom");
            } else if (direction === "270deg") {
              nodes = this.replaceFirst(nodes, "to", " ", "left");
            }
          }
          return nodes;
        }
        normalizeUnit(str, full) {
          let num = parseFloat(str);
          let deg = (num / full) * 360;
          return `${deg}deg`;
        }
        old(prefix) {
          if (prefix === "-webkit-") {
            let type;
            if (this.name === "linear-gradient") {
              type = "linear";
            } else if (this.name === "repeating-linear-gradient") {
              type = "repeating-linear";
            } else if (this.name === "repeating-radial-gradient") {
              type = "repeating-radial";
            } else {
              type = "radial";
            }
            let string = "-gradient";
            let regexp = utils.regexp(
              `-webkit-(${type}-gradient|gradient\\(\\s*${type})`,
              false,
            );
            return new OldValue(this.name, prefix + this.name, string, regexp);
          } else {
            return super.old(prefix);
          }
        }
        oldDirection(params) {
          let div = this.cloneDiv(params[0]);
          if (params[0][0].value !== "to") {
            return params.unshift([
              { type: "word", value: Gradient.oldDirections.bottom },
              div,
            ]);
          } else {
            let words = [];
            for (let node of params[0].slice(2)) {
              if (node.type === "word") {
                words.push(node.value.toLowerCase());
              }
            }
            words = words.join(" ");
            let old = Gradient.oldDirections[words] || words;
            params[0] = [{ type: "word", value: old }, div];
            return params[0];
          }
        }
        oldWebkit(node) {
          let { nodes } = node;
          let string = parser.stringify(node.nodes);
          if (this.name !== "linear-gradient") {
            return false;
          }
          if (nodes[0] && nodes[0].value.includes("deg")) {
            return false;
          }
          if (
            string.includes("px") ||
            string.includes("-corner") ||
            string.includes("-side")
          ) {
            return false;
          }
          let params = [[]];
          for (let i of nodes) {
            params[params.length - 1].push(i);
            if (i.type === "div" && i.value === ",") {
              params.push([]);
            }
          }
          this.oldDirection(params);
          this.colorStops(params);
          node.nodes = [];
          for (let param of params) {
            node.nodes = node.nodes.concat(param);
          }
          node.nodes.unshift(
            { type: "word", value: "linear" },
            this.cloneDiv(node.nodes),
          );
          node.value = "-webkit-gradient";
          return true;
        }
        replace(string, prefix) {
          let ast = parser(string);
          for (let node of ast.nodes) {
            let gradientName = this.name;
            if (node.type === "function" && node.value === gradientName) {
              node.nodes = this.newDirection(node.nodes);
              node.nodes = this.normalize(node.nodes, gradientName);
              if (prefix === "-webkit- old") {
                let changes = this.oldWebkit(node);
                if (!changes) {
                  return false;
                }
              } else {
                node.nodes = this.convertDirection(node.nodes);
                node.value = prefix + node.value;
              }
            }
          }
          return ast.toString();
        }
        replaceFirst(params, ...words) {
          let prefix = words.map((i) => {
            if (i === " ") {
              return { type: "space", value: i };
            }
            return { type: "word", value: i };
          });
          return prefix.concat(params.slice(1));
        }
        revertDirection(word) {
          return Gradient.directions[word.toLowerCase()] || word;
        }
        roundFloat(float, digits) {
          return parseFloat(float.toFixed(digits));
        }
      }
      Gradient.names = [
        "linear-gradient",
        "repeating-linear-gradient",
        "radial-gradient",
        "repeating-radial-gradient",
      ];
      Gradient.directions = {
        bottom: "top",
        left: "right",
        right: "left",
        top: "bottom",
      };
      Gradient.oldDirections = {
        bottom: "left top, left bottom",
        "bottom left": "right top, left bottom",
        "bottom right": "left top, right bottom",
        left: "right top, left top",
        "left bottom": "right top, left bottom",
        "left top": "right bottom, left top",
        right: "left top, right top",
        "right bottom": "left top, right bottom",
        "right top": "left bottom, right top",
        top: "left bottom, left top",
        "top left": "right bottom, left top",
        "top right": "left bottom, right top",
      };
      module.exports = Gradient;
    },
    5159: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      let utils = __nccwpck_require__(3398);
      class GridArea extends Declaration {
        insert(decl, prefix, prefixes, result) {
          if (prefix !== "-ms-") return super.insert(decl, prefix, prefixes);
          let values = utils.parse(decl);
          let [rowStart, rowSpan] = utils.translate(values, 0, 2);
          let [columnStart, columnSpan] = utils.translate(values, 1, 3);
          [
            ["grid-row", rowStart],
            ["grid-row-span", rowSpan],
            ["grid-column", columnStart],
            ["grid-column-span", columnSpan],
          ].forEach(([prop, value]) => {
            utils.insertDecl(decl, prop, value);
          });
          utils.warnTemplateSelectorNotFound(decl, result);
          utils.warnIfGridRowColumnExists(decl, result);
          return undefined;
        }
      }
      GridArea.names = ["grid-area"];
      module.exports = GridArea;
    },
    4621: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      class GridColumnAlign extends Declaration {
        check(decl) {
          return !decl.value.includes("flex-") && decl.value !== "baseline";
        }
        normalize() {
          return "justify-self";
        }
        prefixed(prop, prefix) {
          return prefix + "grid-column-align";
        }
      }
      GridColumnAlign.names = ["grid-column-align"];
      module.exports = GridColumnAlign;
    },
    6307: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      let { isPureNumber } = __nccwpck_require__(6584);
      class GridEnd extends Declaration {
        insert(decl, prefix, prefixes, result) {
          if (prefix !== "-ms-") return super.insert(decl, prefix, prefixes);
          let clonedDecl = this.clone(decl);
          let startProp = decl.prop.replace(/end$/, "start");
          let spanProp = prefix + decl.prop.replace(/end$/, "span");
          if (decl.parent.some((i) => i.prop === spanProp)) {
            return undefined;
          }
          clonedDecl.prop = spanProp;
          if (decl.value.includes("span")) {
            clonedDecl.value = decl.value.replace(/span\s/i, "");
          } else {
            let startDecl;
            decl.parent.walkDecls(startProp, (d) => {
              startDecl = d;
            });
            if (startDecl) {
              if (isPureNumber(startDecl.value)) {
                let value = Number(decl.value) - Number(startDecl.value) + "";
                clonedDecl.value = value;
              } else {
                return undefined;
              }
            } else {
              decl.warn(
                result,
                `Can not prefix ${decl.prop} (${startProp} is not found)`,
              );
            }
          }
          decl.cloneBefore(clonedDecl);
          return undefined;
        }
      }
      GridEnd.names = ["grid-row-end", "grid-column-end"];
      module.exports = GridEnd;
    },
    5565: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      class GridRowAlign extends Declaration {
        check(decl) {
          return !decl.value.includes("flex-") && decl.value !== "baseline";
        }
        normalize() {
          return "align-self";
        }
        prefixed(prop, prefix) {
          return prefix + "grid-row-align";
        }
      }
      GridRowAlign.names = ["grid-row-align"];
      module.exports = GridRowAlign;
    },
    8041: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      let utils = __nccwpck_require__(3398);
      class GridRowColumn extends Declaration {
        insert(decl, prefix, prefixes) {
          if (prefix !== "-ms-") return super.insert(decl, prefix, prefixes);
          let values = utils.parse(decl);
          let [start, span] = utils.translate(values, 0, 1);
          let hasStartValueSpan = values[0] && values[0].includes("span");
          if (hasStartValueSpan) {
            span = values[0].join("").replace(/\D/g, "");
          }
          [
            [decl.prop, start],
            [`${decl.prop}-span`, span],
          ].forEach(([prop, value]) => {
            utils.insertDecl(decl, prop, value);
          });
          return undefined;
        }
      }
      GridRowColumn.names = ["grid-row", "grid-column"];
      module.exports = GridRowColumn;
    },
    9572: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      let {
        autoplaceGridItems,
        getGridGap,
        inheritGridGap,
        prefixTrackProp,
        prefixTrackValue,
      } = __nccwpck_require__(3398);
      let Processor = __nccwpck_require__(4108);
      class GridRowsColumns extends Declaration {
        insert(decl, prefix, prefixes, result) {
          if (prefix !== "-ms-") return super.insert(decl, prefix, prefixes);
          let { parent, prop, value } = decl;
          let isRowProp = prop.includes("rows");
          let isColumnProp = prop.includes("columns");
          let hasGridTemplate = parent.some(
            (i) =>
              i.prop === "grid-template" || i.prop === "grid-template-areas",
          );
          if (hasGridTemplate && isRowProp) {
            return false;
          }
          let processor = new Processor({ options: {} });
          let status = processor.gridStatus(parent, result);
          let gap = getGridGap(decl);
          gap = inheritGridGap(decl, gap) || gap;
          let gapValue = isRowProp ? gap.row : gap.column;
          if (
            (status === "no-autoplace" || status === true) &&
            !hasGridTemplate
          ) {
            gapValue = null;
          }
          let prefixValue = prefixTrackValue({ gap: gapValue, value });
          decl.cloneBefore({
            prop: prefixTrackProp({ prefix, prop }),
            value: prefixValue,
          });
          let autoflow = parent.nodes.find((i) => i.prop === "grid-auto-flow");
          let autoflowValue = "row";
          if (autoflow && !processor.disabled(autoflow, result)) {
            autoflowValue = autoflow.value.trim();
          }
          if (status === "autoplace") {
            let rowDecl = parent.nodes.find(
              (i) => i.prop === "grid-template-rows",
            );
            if (!rowDecl && hasGridTemplate) {
              return undefined;
            } else if (!rowDecl && !hasGridTemplate) {
              decl.warn(
                result,
                "Autoplacement does not work without grid-template-rows property",
              );
              return undefined;
            }
            let columnDecl = parent.nodes.find(
              (i) => i.prop === "grid-template-columns",
            );
            if (!columnDecl && !hasGridTemplate) {
              decl.warn(
                result,
                "Autoplacement does not work without grid-template-columns property",
              );
            }
            if (isColumnProp && !hasGridTemplate) {
              autoplaceGridItems(decl, result, gap, autoflowValue);
            }
          }
          return undefined;
        }
        normalize(prop) {
          return prop.replace(/^grid-(rows|columns)/, "grid-template-$1");
        }
        prefixed(prop, prefix) {
          if (prefix === "-ms-") {
            return prefixTrackProp({ prefix, prop });
          }
          return super.prefixed(prop, prefix);
        }
      }
      GridRowsColumns.names = [
        "grid-template-rows",
        "grid-template-columns",
        "grid-rows",
        "grid-columns",
      ];
      module.exports = GridRowsColumns;
    },
    7526: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      class GridStart extends Declaration {
        check(decl) {
          let value = decl.value;
          return !value.includes("/") && !value.includes("span");
        }
        normalize(prop) {
          return prop.replace("-start", "");
        }
        prefixed(prop, prefix) {
          let result = super.prefixed(prop, prefix);
          if (prefix === "-ms-") {
            result = result.replace("-start", "");
          }
          return result;
        }
      }
      GridStart.names = ["grid-row-start", "grid-column-start"];
      module.exports = GridStart;
    },
    577: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      let {
        getGridGap,
        inheritGridGap,
        parseGridAreas,
        prefixTrackProp,
        prefixTrackValue,
        warnGridGap,
        warnMissedAreas,
      } = __nccwpck_require__(3398);
      function getGridRows(tpl) {
        return tpl
          .trim()
          .slice(1, -1)
          .split(/["']\s*["']?/g);
      }
      class GridTemplateAreas extends Declaration {
        insert(decl, prefix, prefixes, result) {
          if (prefix !== "-ms-") return super.insert(decl, prefix, prefixes);
          let hasColumns = false;
          let hasRows = false;
          let parent = decl.parent;
          let gap = getGridGap(decl);
          gap = inheritGridGap(decl, gap) || gap;
          parent.walkDecls(/-ms-grid-rows/, (i) => i.remove());
          parent.walkDecls(/grid-template-(rows|columns)/, (trackDecl) => {
            if (trackDecl.prop === "grid-template-rows") {
              hasRows = true;
              let { prop, value } = trackDecl;
              trackDecl.cloneBefore({
                prop: prefixTrackProp({ prefix, prop }),
                value: prefixTrackValue({ gap: gap.row, value }),
              });
            } else {
              hasColumns = true;
            }
          });
          let gridRows = getGridRows(decl.value);
          if (hasColumns && !hasRows && gap.row && gridRows.length > 1) {
            decl.cloneBefore({
              prop: "-ms-grid-rows",
              raws: {},
              value: prefixTrackValue({
                gap: gap.row,
                value: `repeat(${gridRows.length}, auto)`,
              }),
            });
          }
          warnGridGap({ decl, gap, hasColumns, result });
          let areas = parseGridAreas({ gap, rows: gridRows });
          warnMissedAreas(areas, decl, result);
          return decl;
        }
      }
      GridTemplateAreas.names = ["grid-template-areas"];
      module.exports = GridTemplateAreas;
    },
    304: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      let {
        getGridGap,
        inheritGridGap,
        parseTemplate,
        warnGridGap,
        warnMissedAreas,
      } = __nccwpck_require__(3398);
      class GridTemplate extends Declaration {
        insert(decl, prefix, prefixes, result) {
          if (prefix !== "-ms-") return super.insert(decl, prefix, prefixes);
          if (decl.parent.some((i) => i.prop === "-ms-grid-rows")) {
            return undefined;
          }
          let gap = getGridGap(decl);
          let inheritedGap = inheritGridGap(decl, gap);
          let { areas, columns, rows } = parseTemplate({
            decl,
            gap: inheritedGap || gap,
          });
          let hasAreas = Object.keys(areas).length > 0;
          let hasRows = Boolean(rows);
          let hasColumns = Boolean(columns);
          warnGridGap({ decl, gap, hasColumns, result });
          warnMissedAreas(areas, decl, result);
          if ((hasRows && hasColumns) || hasAreas) {
            decl.cloneBefore({ prop: "-ms-grid-rows", raws: {}, value: rows });
          }
          if (hasColumns) {
            decl.cloneBefore({
              prop: "-ms-grid-columns",
              raws: {},
              value: columns,
            });
          }
          return decl;
        }
      }
      GridTemplate.names = ["grid-template"];
      module.exports = GridTemplate;
    },
    3398: (__unused_webpack_module, exports, __nccwpck_require__) => {
      let parser = __nccwpck_require__(9285);
      let list = __nccwpck_require__(977).list;
      let uniq = __nccwpck_require__(6584).uniq;
      let escapeRegexp = __nccwpck_require__(6584).escapeRegexp;
      let splitSelector = __nccwpck_require__(6584).splitSelector;
      function convert(value) {
        if (
          value &&
          value.length === 2 &&
          value[0] === "span" &&
          parseInt(value[1], 10) > 0
        ) {
          return [false, parseInt(value[1], 10)];
        }
        if (value && value.length === 1 && parseInt(value[0], 10) > 0) {
          return [parseInt(value[0], 10), false];
        }
        return [false, false];
      }
      exports.translate = translate;
      function translate(values, startIndex, endIndex) {
        let startValue = values[startIndex];
        let endValue = values[endIndex];
        if (!startValue) {
          return [false, false];
        }
        let [start, spanStart] = convert(startValue);
        let [end, spanEnd] = convert(endValue);
        if (start && !endValue) {
          return [start, false];
        }
        if (spanStart && end) {
          return [end - spanStart, spanStart];
        }
        if (start && spanEnd) {
          return [start, spanEnd];
        }
        if (start && end) {
          return [start, end - start];
        }
        return [false, false];
      }
      exports.parse = parse;
      function parse(decl) {
        let node = parser(decl.value);
        let values = [];
        let current = 0;
        values[current] = [];
        for (let i of node.nodes) {
          if (i.type === "div") {
            current += 1;
            values[current] = [];
          } else if (i.type === "word") {
            values[current].push(i.value);
          }
        }
        return values;
      }
      exports.insertDecl = insertDecl;
      function insertDecl(decl, prop, value) {
        if (value && !decl.parent.some((i) => i.prop === `-ms-${prop}`)) {
          decl.cloneBefore({ prop: `-ms-${prop}`, value: value.toString() });
        }
      }
      exports.prefixTrackProp = prefixTrackProp;
      function prefixTrackProp({ prefix, prop }) {
        return prefix + prop.replace("template-", "");
      }
      function transformRepeat({ nodes }, { gap }) {
        let { count, size } = nodes.reduce(
          (result, node) => {
            if (node.type === "div" && node.value === ",") {
              result.key = "size";
            } else {
              result[result.key].push(parser.stringify(node));
            }
            return result;
          },
          { count: [], key: "count", size: [] },
        );
        if (gap) {
          size = size.filter((i) => i.trim());
          let val = [];
          for (let i = 1; i <= count; i++) {
            size.forEach((item, index) => {
              if (index > 0 || i > 1) {
                val.push(gap);
              }
              val.push(item);
            });
          }
          return val.join(" ");
        }
        return `(${size.join("")})[${count.join("")}]`;
      }
      exports.prefixTrackValue = prefixTrackValue;
      function prefixTrackValue({ gap, value }) {
        let result = parser(value).nodes.reduce((nodes, node) => {
          if (node.type === "function" && node.value === "repeat") {
            return nodes.concat({
              type: "word",
              value: transformRepeat(node, { gap }),
            });
          }
          if (gap && node.type === "space") {
            return nodes.concat(
              { type: "space", value: " " },
              { type: "word", value: gap },
              node,
            );
          }
          return nodes.concat(node);
        }, []);
        return parser.stringify(result);
      }
      let DOTS = /^\.+$/;
      function track(start, end) {
        return { end, span: end - start, start };
      }
      function getColumns(line) {
        return line.trim().split(/\s+/g);
      }
      exports.parseGridAreas = parseGridAreas;
      function parseGridAreas({ gap, rows }) {
        return rows.reduce((areas, line, rowIndex) => {
          if (gap.row) rowIndex *= 2;
          if (line.trim() === "") return areas;
          getColumns(line).forEach((area, columnIndex) => {
            if (DOTS.test(area)) return;
            if (gap.column) columnIndex *= 2;
            if (typeof areas[area] === "undefined") {
              areas[area] = {
                column: track(columnIndex + 1, columnIndex + 2),
                row: track(rowIndex + 1, rowIndex + 2),
              };
            } else {
              let { column, row } = areas[area];
              column.start = Math.min(column.start, columnIndex + 1);
              column.end = Math.max(column.end, columnIndex + 2);
              column.span = column.end - column.start;
              row.start = Math.min(row.start, rowIndex + 1);
              row.end = Math.max(row.end, rowIndex + 2);
              row.span = row.end - row.start;
            }
          });
          return areas;
        }, {});
      }
      function testTrack(node) {
        return node.type === "word" && /^\[.+]$/.test(node.value);
      }
      function verifyRowSize(result) {
        if (result.areas.length > result.rows.length) {
          result.rows.push("auto");
        }
        return result;
      }
      exports.parseTemplate = parseTemplate;
      function parseTemplate({ decl, gap }) {
        let gridTemplate = parser(decl.value).nodes.reduce(
          (result, node) => {
            let { type, value } = node;
            if (testTrack(node) || type === "space") return result;
            if (type === "string") {
              result = verifyRowSize(result);
              result.areas.push(value);
            }
            if (type === "word" || type === "function") {
              result[result.key].push(parser.stringify(node));
            }
            if (type === "div" && value === "/") {
              result.key = "columns";
              result = verifyRowSize(result);
            }
            return result;
          },
          { areas: [], columns: [], key: "rows", rows: [] },
        );
        return {
          areas: parseGridAreas({ gap, rows: gridTemplate.areas }),
          columns: prefixTrackValue({
            gap: gap.column,
            value: gridTemplate.columns.join(" "),
          }),
          rows: prefixTrackValue({
            gap: gap.row,
            value: gridTemplate.rows.join(" "),
          }),
        };
      }
      function getMSDecls(area, addRowSpan = false, addColumnSpan = false) {
        let result = [{ prop: "-ms-grid-row", value: String(area.row.start) }];
        if (area.row.span > 1 || addRowSpan) {
          result.push({
            prop: "-ms-grid-row-span",
            value: String(area.row.span),
          });
        }
        result.push({
          prop: "-ms-grid-column",
          value: String(area.column.start),
        });
        if (area.column.span > 1 || addColumnSpan) {
          result.push({
            prop: "-ms-grid-column-span",
            value: String(area.column.span),
          });
        }
        return result;
      }
      function getParentMedia(parent) {
        if (parent.type === "atrule" && parent.name === "media") {
          return parent;
        }
        if (!parent.parent) {
          return false;
        }
        return getParentMedia(parent.parent);
      }
      function changeDuplicateAreaSelectors(ruleSelectors, templateSelectors) {
        ruleSelectors = ruleSelectors.map((selector) => {
          let selectorBySpace = list.space(selector);
          let selectorByComma = list.comma(selector);
          if (selectorBySpace.length > selectorByComma.length) {
            selector = selectorBySpace.slice(-1).join("");
          }
          return selector;
        });
        return ruleSelectors.map((ruleSelector) => {
          let newSelector = templateSelectors.map((tplSelector, index) => {
            let space = index === 0 ? "" : " ";
            return `${space}${tplSelector} > ${ruleSelector}`;
          });
          return newSelector;
        });
      }
      function selectorsEqual(ruleA, ruleB) {
        return ruleA.selectors.some((sel) => ruleB.selectors.includes(sel));
      }
      function parseGridTemplatesData(css) {
        let parsed = [];
        css.walkDecls(/grid-template(-areas)?$/, (d) => {
          let rule = d.parent;
          let media = getParentMedia(rule);
          let gap = getGridGap(d);
          let inheritedGap = inheritGridGap(d, gap);
          let { areas } = parseTemplate({ decl: d, gap: inheritedGap || gap });
          let areaNames = Object.keys(areas);
          if (areaNames.length === 0) {
            return true;
          }
          let index = parsed.reduce((acc, { allAreas }, idx) => {
            let hasAreas =
              allAreas && areaNames.some((area) => allAreas.includes(area));
            return hasAreas ? idx : acc;
          }, null);
          if (index !== null) {
            let { allAreas, rules } = parsed[index];
            let hasNoDuplicates = rules.some(
              (r) => r.hasDuplicates === false && selectorsEqual(r, rule),
            );
            let duplicatesFound = false;
            let duplicateAreaNames = rules.reduce((acc, r) => {
              if (!r.params && selectorsEqual(r, rule)) {
                duplicatesFound = true;
                return r.duplicateAreaNames;
              }
              if (!duplicatesFound) {
                areaNames.forEach((name) => {
                  if (r.areas[name]) {
                    acc.push(name);
                  }
                });
              }
              return uniq(acc);
            }, []);
            rules.forEach((r) => {
              areaNames.forEach((name) => {
                let area = r.areas[name];
                if (area && area.row.span !== areas[name].row.span) {
                  areas[name].row.updateSpan = true;
                }
                if (area && area.column.span !== areas[name].column.span) {
                  areas[name].column.updateSpan = true;
                }
              });
            });
            parsed[index].allAreas = uniq([...allAreas, ...areaNames]);
            parsed[index].rules.push({
              areas,
              duplicateAreaNames,
              hasDuplicates: !hasNoDuplicates,
              node: rule,
              params: media.params,
              selectors: rule.selectors,
            });
          } else {
            parsed.push({
              allAreas: areaNames,
              areasCount: 0,
              rules: [
                {
                  areas,
                  duplicateAreaNames: [],
                  duplicateRules: [],
                  hasDuplicates: false,
                  node: rule,
                  params: media.params,
                  selectors: rule.selectors,
                },
              ],
            });
          }
          return undefined;
        });
        return parsed;
      }
      exports.insertAreas = insertAreas;
      function insertAreas(css, isDisabled) {
        let gridTemplatesData = parseGridTemplatesData(css);
        if (gridTemplatesData.length === 0) {
          return undefined;
        }
        let rulesToInsert = {};
        css.walkDecls("grid-area", (gridArea) => {
          let gridAreaRule = gridArea.parent;
          let hasPrefixedRow = gridAreaRule.first.prop === "-ms-grid-row";
          let gridAreaMedia = getParentMedia(gridAreaRule);
          if (isDisabled(gridArea)) {
            return undefined;
          }
          let gridAreaRuleIndex = css.index(gridAreaMedia || gridAreaRule);
          let value = gridArea.value;
          let data = gridTemplatesData.filter((d) =>
            d.allAreas.includes(value),
          )[0];
          if (!data) {
            return true;
          }
          let lastArea = data.allAreas[data.allAreas.length - 1];
          let selectorBySpace = list.space(gridAreaRule.selector);
          let selectorByComma = list.comma(gridAreaRule.selector);
          let selectorIsComplex =
            selectorBySpace.length > 1 &&
            selectorBySpace.length > selectorByComma.length;
          if (hasPrefixedRow) {
            return false;
          }
          if (!rulesToInsert[lastArea]) {
            rulesToInsert[lastArea] = {};
          }
          let lastRuleIsSet = false;
          for (let rule of data.rules) {
            let area = rule.areas[value];
            let hasDuplicateName = rule.duplicateAreaNames.includes(value);
            if (!area) {
              let lastRule = rulesToInsert[lastArea].lastRule;
              let lastRuleIndex;
              if (lastRule) {
                lastRuleIndex = css.index(lastRule);
              } else {
                lastRuleIndex = -1;
              }
              if (gridAreaRuleIndex > lastRuleIndex) {
                rulesToInsert[lastArea].lastRule =
                  gridAreaMedia || gridAreaRule;
              }
              continue;
            }
            if (rule.params && !rulesToInsert[lastArea][rule.params]) {
              rulesToInsert[lastArea][rule.params] = [];
            }
            if ((!rule.hasDuplicates || !hasDuplicateName) && !rule.params) {
              getMSDecls(area, false, false)
                .reverse()
                .forEach((i) =>
                  gridAreaRule.prepend(
                    Object.assign(i, {
                      raws: { between: gridArea.raws.between },
                    }),
                  ),
                );
              rulesToInsert[lastArea].lastRule = gridAreaRule;
              lastRuleIsSet = true;
            } else if (
              rule.hasDuplicates &&
              !rule.params &&
              !selectorIsComplex
            ) {
              let cloned = gridAreaRule.clone();
              cloned.removeAll();
              getMSDecls(area, area.row.updateSpan, area.column.updateSpan)
                .reverse()
                .forEach((i) =>
                  cloned.prepend(
                    Object.assign(i, {
                      raws: { between: gridArea.raws.between },
                    }),
                  ),
                );
              cloned.selectors = changeDuplicateAreaSelectors(
                cloned.selectors,
                rule.selectors,
              );
              if (rulesToInsert[lastArea].lastRule) {
                rulesToInsert[lastArea].lastRule.after(cloned);
              }
              rulesToInsert[lastArea].lastRule = cloned;
              lastRuleIsSet = true;
            } else if (
              rule.hasDuplicates &&
              !rule.params &&
              selectorIsComplex &&
              gridAreaRule.selector.includes(rule.selectors[0])
            ) {
              gridAreaRule.walkDecls(/-ms-grid-(row|column)/, (d) =>
                d.remove(),
              );
              getMSDecls(area, area.row.updateSpan, area.column.updateSpan)
                .reverse()
                .forEach((i) =>
                  gridAreaRule.prepend(
                    Object.assign(i, {
                      raws: { between: gridArea.raws.between },
                    }),
                  ),
                );
            } else if (rule.params) {
              let cloned = gridAreaRule.clone();
              cloned.removeAll();
              getMSDecls(area, area.row.updateSpan, area.column.updateSpan)
                .reverse()
                .forEach((i) =>
                  cloned.prepend(
                    Object.assign(i, {
                      raws: { between: gridArea.raws.between },
                    }),
                  ),
                );
              if (rule.hasDuplicates && hasDuplicateName) {
                cloned.selectors = changeDuplicateAreaSelectors(
                  cloned.selectors,
                  rule.selectors,
                );
              }
              cloned.raws = rule.node.raws;
              if (css.index(rule.node.parent) > gridAreaRuleIndex) {
                rule.node.parent.append(cloned);
              } else {
                rulesToInsert[lastArea][rule.params].push(cloned);
              }
              if (!lastRuleIsSet) {
                rulesToInsert[lastArea].lastRule =
                  gridAreaMedia || gridAreaRule;
              }
            }
          }
          return undefined;
        });
        Object.keys(rulesToInsert).forEach((area) => {
          let data = rulesToInsert[area];
          let lastRule = data.lastRule;
          Object.keys(data)
            .reverse()
            .filter((p) => p !== "lastRule")
            .forEach((params) => {
              if (data[params].length > 0 && lastRule) {
                lastRule.after({ name: "media", params });
                lastRule.next().append(data[params]);
              }
            });
        });
        return undefined;
      }
      exports.warnMissedAreas = warnMissedAreas;
      function warnMissedAreas(areas, decl, result) {
        let missed = Object.keys(areas);
        decl.root().walkDecls("grid-area", (gridArea) => {
          missed = missed.filter((e) => e !== gridArea.value);
        });
        if (missed.length > 0) {
          decl.warn(result, "Can not find grid areas: " + missed.join(", "));
        }
        return undefined;
      }
      exports.warnTemplateSelectorNotFound = warnTemplateSelectorNotFound;
      function warnTemplateSelectorNotFound(decl, result) {
        let rule = decl.parent;
        let root = decl.root();
        let duplicatesFound = false;
        let slicedSelectorArr = list
          .space(rule.selector)
          .filter((str) => str !== ">")
          .slice(0, -1);
        if (slicedSelectorArr.length > 0) {
          let gridTemplateFound = false;
          let foundAreaSelector = null;
          root.walkDecls(/grid-template(-areas)?$/, (d) => {
            let parent = d.parent;
            let templateSelectors = parent.selectors;
            let { areas } = parseTemplate({ decl: d, gap: getGridGap(d) });
            let hasArea = areas[decl.value];
            for (let tplSelector of templateSelectors) {
              if (gridTemplateFound) {
                break;
              }
              let tplSelectorArr = list
                .space(tplSelector)
                .filter((str) => str !== ">");
              gridTemplateFound = tplSelectorArr.every(
                (item, idx) => item === slicedSelectorArr[idx],
              );
            }
            if (gridTemplateFound || !hasArea) {
              return true;
            }
            if (!foundAreaSelector) {
              foundAreaSelector = parent.selector;
            }
            if (foundAreaSelector && foundAreaSelector !== parent.selector) {
              duplicatesFound = true;
            }
            return undefined;
          });
          if (!gridTemplateFound && duplicatesFound) {
            decl.warn(
              result,
              "Autoprefixer cannot find a grid-template " +
                `containing the duplicate grid-area "${decl.value}" ` +
                `with full selector matching: ${slicedSelectorArr.join(" ")}`,
            );
          }
        }
      }
      exports.warnIfGridRowColumnExists = warnIfGridRowColumnExists;
      function warnIfGridRowColumnExists(decl, result) {
        let rule = decl.parent;
        let decls = [];
        rule.walkDecls(/^grid-(row|column)/, (d) => {
          if (
            !d.prop.endsWith("-end") &&
            !d.value.startsWith("span") &&
            !d.prop.endsWith("-gap")
          ) {
            decls.push(d);
          }
        });
        if (decls.length > 0) {
          decls.forEach((d) => {
            d.warn(
              result,
              "You already have a grid-area declaration present in the rule. " +
                `You should use either grid-area or ${d.prop}, not both`,
            );
          });
        }
        return undefined;
      }
      exports.getGridGap = getGridGap;
      function getGridGap(decl) {
        let gap = {};
        let testGap = /^(grid-)?((row|column)-)?gap$/;
        decl.parent.walkDecls(testGap, ({ prop, value }) => {
          if (/^(grid-)?gap$/.test(prop)) {
            let [row, , column] = parser(value).nodes;
            gap.row = row && parser.stringify(row);
            gap.column = column ? parser.stringify(column) : gap.row;
          }
          if (/^(grid-)?row-gap$/.test(prop)) gap.row = value;
          if (/^(grid-)?column-gap$/.test(prop)) gap.column = value;
        });
        return gap;
      }
      function parseMediaParams(params) {
        if (!params) {
          return [];
        }
        let parsed = parser(params);
        let prop;
        let value;
        parsed.walk((node) => {
          if (node.type === "word" && /min|max/g.test(node.value)) {
            prop = node.value;
          } else if (node.value.includes("px")) {
            value = parseInt(node.value.replace(/\D/g, ""));
          }
        });
        return [prop, value];
      }
      function shouldInheritGap(selA, selB) {
        let result;
        let splitSelectorArrA = splitSelector(selA);
        let splitSelectorArrB = splitSelector(selB);
        if (splitSelectorArrA[0].length < splitSelectorArrB[0].length) {
          return false;
        } else if (splitSelectorArrA[0].length > splitSelectorArrB[0].length) {
          let idx = splitSelectorArrA[0].reduce((res, [item], index) => {
            let firstSelectorPart = splitSelectorArrB[0][0][0];
            if (item === firstSelectorPart) {
              return index;
            }
            return false;
          }, false);
          if (idx) {
            result = splitSelectorArrB[0].every((arr, index) =>
              arr.every(
                (part, innerIndex) =>
                  splitSelectorArrA[0].slice(idx)[index][innerIndex] === part,
              ),
            );
          }
        } else {
          result = splitSelectorArrB.some((byCommaArr) =>
            byCommaArr.every((bySpaceArr, index) =>
              bySpaceArr.every(
                (part, innerIndex) =>
                  splitSelectorArrA[0][index][innerIndex] === part,
              ),
            ),
          );
        }
        return result;
      }
      exports.inheritGridGap = inheritGridGap;
      function inheritGridGap(decl, gap) {
        let rule = decl.parent;
        let mediaRule = getParentMedia(rule);
        let root = rule.root();
        let splitSelectorArr = splitSelector(rule.selector);
        if (Object.keys(gap).length > 0) {
          return false;
        }
        let [prop] = parseMediaParams(mediaRule.params);
        let lastBySpace = splitSelectorArr[0];
        let escaped = escapeRegexp(lastBySpace[lastBySpace.length - 1][0]);
        let regexp = new RegExp(`(${escaped}$)|(${escaped}[,.])`);
        let closestRuleGap;
        root.walkRules(regexp, (r) => {
          let gridGap;
          if (rule.toString() === r.toString()) {
            return false;
          }
          r.walkDecls("grid-gap", (d) => (gridGap = getGridGap(d)));
          if (!gridGap || Object.keys(gridGap).length === 0) {
            return true;
          }
          if (!shouldInheritGap(rule.selector, r.selector)) {
            return true;
          }
          let media = getParentMedia(r);
          if (media) {
            let propToCompare = parseMediaParams(media.params)[0];
            if (propToCompare === prop) {
              closestRuleGap = gridGap;
              return true;
            }
          } else {
            closestRuleGap = gridGap;
            return true;
          }
          return undefined;
        });
        if (closestRuleGap && Object.keys(closestRuleGap).length > 0) {
          return closestRuleGap;
        }
        return false;
      }
      exports.warnGridGap = warnGridGap;
      function warnGridGap({ decl, gap, hasColumns, result }) {
        let hasBothGaps = gap.row && gap.column;
        if (!hasColumns && (hasBothGaps || (gap.column && !gap.row))) {
          delete gap.column;
          decl.warn(
            result,
            "Can not implement grid-gap without grid-template-columns",
          );
        }
      }
      function normalizeRowColumn(str) {
        let normalized = parser(str).nodes.reduce((result, node) => {
          if (node.type === "function" && node.value === "repeat") {
            let key = "count";
            let [count, value] = node.nodes.reduce(
              (acc, n) => {
                if (n.type === "word" && key === "count") {
                  acc[0] = Math.abs(parseInt(n.value));
                  return acc;
                }
                if (n.type === "div" && n.value === ",") {
                  key = "value";
                  return acc;
                }
                if (key === "value") {
                  acc[1] += parser.stringify(n);
                }
                return acc;
              },
              [0, ""],
            );
            if (count) {
              for (let i = 0; i < count; i++) {
                result.push(value);
              }
            }
            return result;
          }
          if (node.type === "space") {
            return result;
          }
          return result.concat(parser.stringify(node));
        }, []);
        return normalized;
      }
      exports.autoplaceGridItems = autoplaceGridItems;
      function autoplaceGridItems(decl, result, gap, autoflowValue = "row") {
        let { parent } = decl;
        let rowDecl = parent.nodes.find((i) => i.prop === "grid-template-rows");
        let rows = normalizeRowColumn(rowDecl.value);
        let columns = normalizeRowColumn(decl.value);
        let filledRows = rows.map((_, rowIndex) =>
          Array.from(
            { length: columns.length },
            (v, k) => k + rowIndex * columns.length + 1,
          ).join(" "),
        );
        let areas = parseGridAreas({ gap, rows: filledRows });
        let keys = Object.keys(areas);
        let items = keys.map((i) => areas[i]);
        if (autoflowValue.includes("column")) {
          items = items.sort((a, b) => a.column.start - b.column.start);
        }
        items.reverse().forEach((item, index) => {
          let { column, row } = item;
          let nodeSelector = parent.selectors
            .map((sel) => sel + ` > *:nth-child(${keys.length - index})`)
            .join(", ");
          let node = parent.clone().removeAll();
          node.selector = nodeSelector;
          node.append({ prop: "-ms-grid-row", value: row.start });
          node.append({ prop: "-ms-grid-column", value: column.start });
          parent.after(node);
        });
        return undefined;
      }
    },
    7453: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      class ImageRendering extends Declaration {
        check(decl) {
          return decl.value === "pixelated";
        }
        normalize() {
          return "image-rendering";
        }
        prefixed(prop, prefix) {
          if (prefix === "-ms-") {
            return "-ms-interpolation-mode";
          }
          return super.prefixed(prop, prefix);
        }
        process(node, result) {
          return super.process(node, result);
        }
        set(decl, prefix) {
          if (prefix !== "-ms-") return super.set(decl, prefix);
          decl.prop = "-ms-interpolation-mode";
          decl.value = "nearest-neighbor";
          return decl;
        }
      }
      ImageRendering.names = ["image-rendering", "interpolation-mode"];
      module.exports = ImageRendering;
    },
    3812: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Value = __nccwpck_require__(2530);
      class ImageSet extends Value {
        replace(string, prefix) {
          let fixed = super.replace(string, prefix);
          if (prefix === "-webkit-") {
            fixed = fixed.replace(/("[^"]+"|'[^']+')(\s+\d+\w)/gi, "url($1)$2");
          }
          return fixed;
        }
      }
      ImageSet.names = ["image-set"];
      module.exports = ImageSet;
    },
    330: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      class InlineLogical extends Declaration {
        normalize(prop) {
          return prop.replace(
            /(margin|padding|border)-(start|end)/,
            "$1-inline-$2",
          );
        }
        prefixed(prop, prefix) {
          return prefix + prop.replace("-inline", "");
        }
      }
      InlineLogical.names = [
        "border-inline-start",
        "border-inline-end",
        "margin-inline-start",
        "margin-inline-end",
        "padding-inline-start",
        "padding-inline-end",
        "border-start",
        "border-end",
        "margin-start",
        "margin-end",
        "padding-start",
        "padding-end",
      ];
      module.exports = InlineLogical;
    },
    325: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let OldValue = __nccwpck_require__(6029);
      let Value = __nccwpck_require__(2530);
      function regexp(name) {
        return new RegExp(`(^|[\\s,(])(${name}($|[\\s),]))`, "gi");
      }
      class Intrinsic extends Value {
        add(decl, prefix) {
          if (decl.prop.includes("grid") && prefix !== "-webkit-") {
            return undefined;
          }
          return super.add(decl, prefix);
        }
        isStretch() {
          return (
            this.name === "stretch" ||
            this.name === "fill" ||
            this.name === "fill-available"
          );
        }
        old(prefix) {
          let prefixed = prefix + this.name;
          if (this.isStretch()) {
            if (prefix === "-moz-") {
              prefixed = "-moz-available";
            } else if (prefix === "-webkit-") {
              prefixed = "-webkit-fill-available";
            }
          }
          return new OldValue(this.name, prefixed, prefixed, regexp(prefixed));
        }
        regexp() {
          if (!this.regexpCache) this.regexpCache = regexp(this.name);
          return this.regexpCache;
        }
        replace(string, prefix) {
          if (prefix === "-moz-" && this.isStretch()) {
            return string.replace(this.regexp(), "$1-moz-available$3");
          }
          if (prefix === "-webkit-" && this.isStretch()) {
            return string.replace(this.regexp(), "$1-webkit-fill-available$3");
          }
          return super.replace(string, prefix);
        }
      }
      Intrinsic.names = [
        "max-content",
        "min-content",
        "fit-content",
        "fill",
        "fill-available",
        "stretch",
      ];
      module.exports = Intrinsic;
    },
    2845: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let flexSpec = __nccwpck_require__(3713);
      let Declaration = __nccwpck_require__(9011);
      class JustifyContent extends Declaration {
        normalize() {
          return "justify-content";
        }
        prefixed(prop, prefix) {
          let spec;
          [spec, prefix] = flexSpec(prefix);
          if (spec === 2009) {
            return prefix + "box-pack";
          }
          if (spec === 2012) {
            return prefix + "flex-pack";
          }
          return super.prefixed(prop, prefix);
        }
        set(decl, prefix) {
          let spec = flexSpec(prefix)[0];
          if (spec === 2009 || spec === 2012) {
            let value = JustifyContent.oldValues[decl.value] || decl.value;
            decl.value = value;
            if (spec !== 2009 || value !== "distribute") {
              return super.set(decl, prefix);
            }
          } else if (spec === "final") {
            return super.set(decl, prefix);
          }
          return undefined;
        }
      }
      JustifyContent.names = ["justify-content", "flex-pack", "box-pack"];
      JustifyContent.oldValues = {
        "flex-end": "end",
        "flex-start": "start",
        "space-around": "distribute",
        "space-between": "justify",
      };
      module.exports = JustifyContent;
    },
    8244: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      class MaskBorder extends Declaration {
        normalize() {
          return this.name.replace("box-image", "border");
        }
        prefixed(prop, prefix) {
          let result = super.prefixed(prop, prefix);
          if (prefix === "-webkit-") {
            result = result.replace("border", "box-image");
          }
          return result;
        }
      }
      MaskBorder.names = [
        "mask-border",
        "mask-border-source",
        "mask-border-slice",
        "mask-border-width",
        "mask-border-outset",
        "mask-border-repeat",
        "mask-box-image",
        "mask-box-image-source",
        "mask-box-image-slice",
        "mask-box-image-width",
        "mask-box-image-outset",
        "mask-box-image-repeat",
      ];
      module.exports = MaskBorder;
    },
    7491: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      class MaskComposite extends Declaration {
        insert(decl, prefix, prefixes) {
          let isCompositeProp = decl.prop === "mask-composite";
          let compositeValues;
          if (isCompositeProp) {
            compositeValues = decl.value.split(",");
          } else {
            compositeValues = decl.value.match(MaskComposite.regexp) || [];
          }
          compositeValues = compositeValues
            .map((el) => el.trim())
            .filter((el) => el);
          let hasCompositeValues = compositeValues.length;
          let compositeDecl;
          if (hasCompositeValues) {
            compositeDecl = this.clone(decl);
            compositeDecl.value = compositeValues
              .map((value) => MaskComposite.oldValues[value] || value)
              .join(", ");
            if (compositeValues.includes("intersect")) {
              compositeDecl.value += ", xor";
            }
            compositeDecl.prop = prefix + "mask-composite";
          }
          if (isCompositeProp) {
            if (!hasCompositeValues) {
              return undefined;
            }
            if (this.needCascade(decl)) {
              compositeDecl.raws.before = this.calcBefore(
                prefixes,
                decl,
                prefix,
              );
            }
            return decl.parent.insertBefore(decl, compositeDecl);
          }
          let cloned = this.clone(decl);
          cloned.prop = prefix + cloned.prop;
          if (hasCompositeValues) {
            cloned.value = cloned.value.replace(MaskComposite.regexp, "");
          }
          if (this.needCascade(decl)) {
            cloned.raws.before = this.calcBefore(prefixes, decl, prefix);
          }
          decl.parent.insertBefore(decl, cloned);
          if (!hasCompositeValues) {
            return decl;
          }
          if (this.needCascade(decl)) {
            compositeDecl.raws.before = this.calcBefore(prefixes, decl, prefix);
          }
          return decl.parent.insertBefore(decl, compositeDecl);
        }
      }
      MaskComposite.names = ["mask", "mask-composite"];
      MaskComposite.oldValues = {
        add: "source-over",
        exclude: "xor",
        intersect: "source-in",
        subtract: "source-out",
      };
      MaskComposite.regexp = new RegExp(
        `\\s+(${Object.keys(MaskComposite.oldValues).join("|")})\\b(?!\\))\\s*(?=[,])`,
        "ig",
      );
      module.exports = MaskComposite;
    },
    2844: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let flexSpec = __nccwpck_require__(3713);
      let Declaration = __nccwpck_require__(9011);
      class Order extends Declaration {
        normalize() {
          return "order";
        }
        prefixed(prop, prefix) {
          let spec;
          [spec, prefix] = flexSpec(prefix);
          if (spec === 2009) {
            return prefix + "box-ordinal-group";
          }
          if (spec === 2012) {
            return prefix + "flex-order";
          }
          return super.prefixed(prop, prefix);
        }
        set(decl, prefix) {
          let spec = flexSpec(prefix)[0];
          if (spec === 2009 && /\d/.test(decl.value)) {
            decl.value = (parseInt(decl.value) + 1).toString();
            return super.set(decl, prefix);
          }
          return super.set(decl, prefix);
        }
      }
      Order.names = ["order", "flex-order", "box-ordinal-group"];
      module.exports = Order;
    },
    7879: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      class OverscrollBehavior extends Declaration {
        normalize() {
          return "overscroll-behavior";
        }
        prefixed(prop, prefix) {
          return prefix + "scroll-chaining";
        }
        set(decl, prefix) {
          if (decl.value === "auto") {
            decl.value = "chained";
          } else if (decl.value === "none" || decl.value === "contain") {
            decl.value = "none";
          }
          return super.set(decl, prefix);
        }
      }
      OverscrollBehavior.names = ["overscroll-behavior", "scroll-chaining"];
      module.exports = OverscrollBehavior;
    },
    9683: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let OldValue = __nccwpck_require__(6029);
      let Value = __nccwpck_require__(2530);
      class Pixelated extends Value {
        old(prefix) {
          if (prefix === "-webkit-") {
            return new OldValue(this.name, "-webkit-optimize-contrast");
          }
          if (prefix === "-moz-") {
            return new OldValue(this.name, "-moz-crisp-edges");
          }
          return super.old(prefix);
        }
        replace(string, prefix) {
          if (prefix === "-webkit-") {
            return string.replace(this.regexp(), "$1-webkit-optimize-contrast");
          }
          if (prefix === "-moz-") {
            return string.replace(this.regexp(), "$1-moz-crisp-edges");
          }
          return super.replace(string, prefix);
        }
      }
      Pixelated.names = ["pixelated"];
      module.exports = Pixelated;
    },
    9178: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      let utils = __nccwpck_require__(3398);
      class PlaceSelf extends Declaration {
        insert(decl, prefix, prefixes) {
          if (prefix !== "-ms-") return super.insert(decl, prefix, prefixes);
          if (decl.parent.some((i) => i.prop === "-ms-grid-row-align")) {
            return undefined;
          }
          let [[first, second]] = utils.parse(decl);
          if (second) {
            utils.insertDecl(decl, "grid-row-align", first);
            utils.insertDecl(decl, "grid-column-align", second);
          } else {
            utils.insertDecl(decl, "grid-row-align", first);
            utils.insertDecl(decl, "grid-column-align", first);
          }
          return undefined;
        }
      }
      PlaceSelf.names = ["place-self"];
      module.exports = PlaceSelf;
    },
    9392: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Selector = __nccwpck_require__(2098);
      class PlaceholderShown extends Selector {
        prefixed(prefix) {
          if (prefix === "-ms-") {
            return ":-ms-input-placeholder";
          }
          return `:${prefix}placeholder-shown`;
        }
      }
      PlaceholderShown.names = [":placeholder-shown"];
      module.exports = PlaceholderShown;
    },
    6470: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Selector = __nccwpck_require__(2098);
      class Placeholder extends Selector {
        possible() {
          return super.possible().concat(["-moz- old", "-ms- old"]);
        }
        prefixed(prefix) {
          if (prefix === "-webkit-") {
            return "::-webkit-input-placeholder";
          }
          if (prefix === "-ms-") {
            return "::-ms-input-placeholder";
          }
          if (prefix === "-ms- old") {
            return ":-ms-input-placeholder";
          }
          if (prefix === "-moz- old") {
            return ":-moz-placeholder";
          }
          return `::${prefix}placeholder`;
        }
      }
      Placeholder.names = ["::placeholder"];
      module.exports = Placeholder;
    },
    7899: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      class PrintColorAdjust extends Declaration {
        normalize() {
          return "print-color-adjust";
        }
        prefixed(prop, prefix) {
          if (prefix === "-moz-") {
            return "color-adjust";
          } else {
            return prefix + "print-color-adjust";
          }
        }
      }
      PrintColorAdjust.names = ["print-color-adjust", "color-adjust"];
      module.exports = PrintColorAdjust;
    },
    2550: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      class TextDecorationSkipInk extends Declaration {
        set(decl, prefix) {
          if (
            decl.prop === "text-decoration-skip-ink" &&
            decl.value === "auto"
          ) {
            decl.prop = prefix + "text-decoration-skip";
            decl.value = "ink";
            return decl;
          } else {
            return super.set(decl, prefix);
          }
        }
      }
      TextDecorationSkipInk.names = [
        "text-decoration-skip-ink",
        "text-decoration-skip",
      ];
      module.exports = TextDecorationSkipInk;
    },
    3351: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      const BASIC = [
        "none",
        "underline",
        "overline",
        "line-through",
        "blink",
        "inherit",
        "initial",
        "unset",
      ];
      class TextDecoration extends Declaration {
        check(decl) {
          return decl.value.split(/\s+/).some((i) => !BASIC.includes(i));
        }
      }
      TextDecoration.names = ["text-decoration"];
      module.exports = TextDecoration;
    },
    639: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      class TextEmphasisPosition extends Declaration {
        set(decl, prefix) {
          if (prefix === "-webkit-") {
            decl.value = decl.value.replace(/\s*(right|left)\s*/i, "");
          }
          return super.set(decl, prefix);
        }
      }
      TextEmphasisPosition.names = ["text-emphasis-position"];
      module.exports = TextEmphasisPosition;
    },
    2589: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      class TransformDecl extends Declaration {
        contain3d(decl) {
          if (decl.prop === "transform-origin") {
            return false;
          }
          for (let func of TransformDecl.functions3d) {
            if (decl.value.includes(`${func}(`)) {
              return true;
            }
          }
          return false;
        }
        insert(decl, prefix, prefixes) {
          if (prefix === "-ms-") {
            if (!this.contain3d(decl) && !this.keyframeParents(decl)) {
              return super.insert(decl, prefix, prefixes);
            }
          } else if (prefix === "-o-") {
            if (!this.contain3d(decl)) {
              return super.insert(decl, prefix, prefixes);
            }
          } else {
            return super.insert(decl, prefix, prefixes);
          }
          return undefined;
        }
        keyframeParents(decl) {
          let { parent } = decl;
          while (parent) {
            if (parent.type === "atrule" && parent.name === "keyframes") {
              return true;
            }
            ({ parent } = parent);
          }
          return false;
        }
        set(decl, prefix) {
          decl = super.set(decl, prefix);
          if (prefix === "-ms-") {
            decl.value = decl.value.replace(/rotatez/gi, "rotate");
          }
          return decl;
        }
      }
      TransformDecl.names = ["transform", "transform-origin"];
      TransformDecl.functions3d = [
        "matrix3d",
        "translate3d",
        "translateZ",
        "scale3d",
        "scaleZ",
        "rotate3d",
        "rotateX",
        "rotateY",
        "perspective",
      ];
      module.exports = TransformDecl;
    },
    797: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      class UserSelect extends Declaration {
        insert(decl, prefix, prefixes) {
          if (decl.value === "all" && prefix === "-ms-") {
            return undefined;
          } else if (
            decl.value === "contain" &&
            (prefix === "-moz-" || prefix === "-webkit-")
          ) {
            return undefined;
          } else {
            return super.insert(decl, prefix, prefixes);
          }
        }
        set(decl, prefix) {
          if (prefix === "-ms-" && decl.value === "contain") {
            decl.value = "element";
          }
          return super.set(decl, prefix);
        }
      }
      UserSelect.names = ["user-select"];
      module.exports = UserSelect;
    },
    9051: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Declaration = __nccwpck_require__(9011);
      class WritingMode extends Declaration {
        insert(decl, prefix, prefixes) {
          if (prefix === "-ms-") {
            let cloned = this.set(this.clone(decl), prefix);
            if (this.needCascade(decl)) {
              cloned.raws.before = this.calcBefore(prefixes, decl, prefix);
            }
            let direction = "ltr";
            decl.parent.nodes.forEach((i) => {
              if (i.prop === "direction") {
                if (i.value === "rtl" || i.value === "ltr") direction = i.value;
              }
            });
            cloned.value =
              WritingMode.msValues[direction][decl.value] || decl.value;
            return decl.parent.insertBefore(decl, cloned);
          }
          return super.insert(decl, prefix, prefixes);
        }
      }
      WritingMode.names = ["writing-mode"];
      WritingMode.msValues = {
        ltr: {
          "horizontal-tb": "lr-tb",
          "vertical-lr": "tb-lr",
          "vertical-rl": "tb-rl",
        },
        rtl: {
          "horizontal-tb": "rl-tb",
          "vertical-lr": "bt-lr",
          "vertical-rl": "bt-rl",
        },
      };
      module.exports = WritingMode;
    },
    3028: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let browserslist = __nccwpck_require__(5478);
      function capitalize(str) {
        return str.slice(0, 1).toUpperCase() + str.slice(1);
      }
      const NAMES = {
        and_chr: "Chrome for Android",
        and_ff: "Firefox for Android",
        and_qq: "QQ Browser",
        and_uc: "UC for Android",
        baidu: "Baidu Browser",
        ie: "IE",
        ie_mob: "IE Mobile",
        ios_saf: "iOS Safari",
        kaios: "KaiOS Browser",
        op_mini: "Opera Mini",
        op_mob: "Opera Mobile",
        samsung: "Samsung Internet",
      };
      function prefix(name, prefixes, note) {
        let out = `  ${name}`;
        if (note) out += " *";
        out += ": ";
        out += prefixes.map((i) => i.replace(/^-(.*)-$/g, "$1")).join(", ");
        out += "\n";
        return out;
      }
      module.exports = function (prefixes) {
        if (prefixes.browsers.selected.length === 0) {
          return "No browsers selected";
        }
        let versions = {};
        for (let browser of prefixes.browsers.selected) {
          let parts = browser.split(" ");
          let name = parts[0];
          let version = parts[1];
          name = NAMES[name] || capitalize(name);
          if (versions[name]) {
            versions[name].push(version);
          } else {
            versions[name] = [version];
          }
        }
        let out = "Browsers:\n";
        for (let browser in versions) {
          let list = versions[browser];
          list = list.sort((a, b) => parseFloat(b) - parseFloat(a));
          out += `  ${browser}: ${list.join(", ")}\n`;
        }
        let coverage = browserslist.coverage(prefixes.browsers.selected);
        let round = Math.round(coverage * 100) / 100;
        out += `\nThese browsers account for ${round}% of all users globally\n`;
        let atrules = [];
        for (let name in prefixes.add) {
          let data = prefixes.add[name];
          if (name[0] === "@" && data.prefixes) {
            atrules.push(prefix(name, data.prefixes));
          }
        }
        if (atrules.length > 0) {
          out += `\nAt-Rules:\n${atrules.sort().join("")}`;
        }
        let selectors = [];
        for (let selector of prefixes.add.selectors) {
          if (selector.prefixes) {
            selectors.push(prefix(selector.name, selector.prefixes));
          }
        }
        if (selectors.length > 0) {
          out += `\nSelectors:\n${selectors.sort().join("")}`;
        }
        let values = [];
        let props = [];
        let hadGrid = false;
        for (let name in prefixes.add) {
          let data = prefixes.add[name];
          if (name[0] !== "@" && data.prefixes) {
            let grid = name.indexOf("grid-") === 0;
            if (grid) hadGrid = true;
            props.push(prefix(name, data.prefixes, grid));
          }
          if (!Array.isArray(data.values)) {
            continue;
          }
          for (let value of data.values) {
            let grid = value.name.includes("grid");
            if (grid) hadGrid = true;
            let string = prefix(value.name, value.prefixes, grid);
            if (!values.includes(string)) {
              values.push(string);
            }
          }
        }
        if (props.length > 0) {
          out += `\nProperties:\n${props.sort().join("")}`;
        }
        if (values.length > 0) {
          out += `\nValues:\n${values.sort().join("")}`;
        }
        if (hadGrid) {
          out += "\n* - Prefixes will be added only on grid: true option.\n";
        }
        if (
          !atrules.length &&
          !selectors.length &&
          !props.length &&
          !values.length
        ) {
          out +=
            "\nAwesome! Your browsers don't require any vendor prefixes." +
            "\nNow you can remove Autoprefixer from build steps.";
        }
        return out;
      };
    },
    7964: (module) => {
      class OldSelector {
        constructor(selector, prefix) {
          this.prefix = prefix;
          this.prefixed = selector.prefixed(this.prefix);
          this.regexp = selector.regexp(this.prefix);
          this.prefixeds = selector
            .possible()
            .map((x) => [selector.prefixed(x), selector.regexp(x)]);
          this.unprefixed = selector.name;
          this.nameRegexp = selector.regexp();
        }
        check(rule) {
          if (!rule.selector.includes(this.prefixed)) {
            return false;
          }
          if (!rule.selector.match(this.regexp)) {
            return false;
          }
          if (this.isHack(rule)) {
            return false;
          }
          return true;
        }
        isHack(rule) {
          let index = rule.parent.index(rule) + 1;
          let rules = rule.parent.nodes;
          while (index < rules.length) {
            let before = rules[index].selector;
            if (!before) {
              return true;
            }
            if (
              before.includes(this.unprefixed) &&
              before.match(this.nameRegexp)
            ) {
              return false;
            }
            let some = false;
            for (let [string, regexp] of this.prefixeds) {
              if (before.includes(string) && before.match(regexp)) {
                some = true;
                break;
              }
            }
            if (!some) {
              return true;
            }
            index += 1;
          }
          return true;
        }
      }
      module.exports = OldSelector;
    },
    6029: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let utils = __nccwpck_require__(6584);
      class OldValue {
        constructor(unprefixed, prefixed, string, regexp) {
          this.unprefixed = unprefixed;
          this.prefixed = prefixed;
          this.string = string || prefixed;
          this.regexp = regexp || utils.regexp(prefixed);
        }
        check(value) {
          if (value.includes(this.string)) {
            return !!value.match(this.regexp);
          }
          return false;
        }
      }
      module.exports = OldValue;
    },
    6579: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Browsers = __nccwpck_require__(931);
      let vendor = __nccwpck_require__(2667);
      let utils = __nccwpck_require__(6584);
      function clone(obj, parent) {
        let cloned = new obj.constructor();
        for (let i of Object.keys(obj || {})) {
          let value = obj[i];
          if (i === "parent" && typeof value === "object") {
            if (parent) {
              cloned[i] = parent;
            }
          } else if (i === "source" || i === null) {
            cloned[i] = value;
          } else if (Array.isArray(value)) {
            cloned[i] = value.map((x) => clone(x, cloned));
          } else if (
            i !== "_autoprefixerPrefix" &&
            i !== "_autoprefixerValues" &&
            i !== "proxyCache"
          ) {
            if (typeof value === "object" && value !== null) {
              value = clone(value, cloned);
            }
            cloned[i] = value;
          }
        }
        return cloned;
      }
      class Prefixer {
        constructor(name, prefixes, all) {
          this.prefixes = prefixes;
          this.name = name;
          this.all = all;
        }
        static clone(node, overrides) {
          let cloned = clone(node);
          for (let name in overrides) {
            cloned[name] = overrides[name];
          }
          return cloned;
        }
        static hack(klass) {
          if (!this.hacks) {
            this.hacks = {};
          }
          return klass.names.map((name) => {
            this.hacks[name] = klass;
            return this.hacks[name];
          });
        }
        static load(name, prefixes, all) {
          let Klass = this.hacks && this.hacks[name];
          if (Klass) {
            return new Klass(name, prefixes, all);
          } else {
            return new this(name, prefixes, all);
          }
        }
        clone(node, overrides) {
          return Prefixer.clone(node, overrides);
        }
        parentPrefix(node) {
          let prefix;
          if (typeof node._autoprefixerPrefix !== "undefined") {
            prefix = node._autoprefixerPrefix;
          } else if (node.type === "decl" && node.prop[0] === "-") {
            prefix = vendor.prefix(node.prop);
          } else if (node.type === "root") {
            prefix = false;
          } else if (
            node.type === "rule" &&
            node.selector.includes(":-") &&
            /:(-\w+-)/.test(node.selector)
          ) {
            prefix = node.selector.match(/:(-\w+-)/)[1];
          } else if (node.type === "atrule" && node.name[0] === "-") {
            prefix = vendor.prefix(node.name);
          } else {
            prefix = this.parentPrefix(node.parent);
          }
          if (!Browsers.prefixes().includes(prefix)) {
            prefix = false;
          }
          node._autoprefixerPrefix = prefix;
          return node._autoprefixerPrefix;
        }
        process(node, result) {
          if (!this.check(node)) {
            return undefined;
          }
          let parent = this.parentPrefix(node);
          let prefixes = this.prefixes.filter(
            (prefix) => !parent || parent === utils.removeNote(prefix),
          );
          let added = [];
          for (let prefix of prefixes) {
            if (this.add(node, prefix, added.concat([prefix]), result)) {
              added.push(prefix);
            }
          }
          return added;
        }
      }
      module.exports = Prefixer;
    },
    5396: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let vendor = __nccwpck_require__(2667);
      let Declaration = __nccwpck_require__(9011);
      let Resolution = __nccwpck_require__(1675);
      let Transition = __nccwpck_require__(960);
      let Processor = __nccwpck_require__(4108);
      let Supports = __nccwpck_require__(6689);
      let Browsers = __nccwpck_require__(931);
      let Selector = __nccwpck_require__(2098);
      let AtRule = __nccwpck_require__(7170);
      let Value = __nccwpck_require__(2530);
      let utils = __nccwpck_require__(6584);
      let hackFullscreen = __nccwpck_require__(5233);
      let hackPlaceholder = __nccwpck_require__(6470);
      let hackPlaceholderShown = __nccwpck_require__(9392);
      let hackFileSelectorButton = __nccwpck_require__(5407);
      let hackFlex = __nccwpck_require__(4190);
      let hackOrder = __nccwpck_require__(2844);
      let hackFilter = __nccwpck_require__(6437);
      let hackGridEnd = __nccwpck_require__(6307);
      let hackAnimation = __nccwpck_require__(7508);
      let hackFlexFlow = __nccwpck_require__(9225);
      let hackFlexGrow = __nccwpck_require__(1708);
      let hackFlexWrap = __nccwpck_require__(4910);
      let hackGridArea = __nccwpck_require__(5159);
      let hackPlaceSelf = __nccwpck_require__(9178);
      let hackGridStart = __nccwpck_require__(7526);
      let hackAlignSelf = __nccwpck_require__(119);
      let hackAppearance = __nccwpck_require__(3397);
      let hackFlexBasis = __nccwpck_require__(3962);
      let hackMaskBorder = __nccwpck_require__(8244);
      let hackMaskComposite = __nccwpck_require__(7491);
      let hackAlignItems = __nccwpck_require__(2478);
      let hackUserSelect = __nccwpck_require__(797);
      let hackFlexShrink = __nccwpck_require__(1945);
      let hackBreakProps = __nccwpck_require__(6946);
      let hackWritingMode = __nccwpck_require__(9051);
      let hackBorderImage = __nccwpck_require__(2212);
      let hackAlignContent = __nccwpck_require__(6788);
      let hackBorderRadius = __nccwpck_require__(189);
      let hackBlockLogical = __nccwpck_require__(1447);
      let hackGridTemplate = __nccwpck_require__(304);
      let hackInlineLogical = __nccwpck_require__(330);
      let hackGridRowAlign = __nccwpck_require__(5565);
      let hackTransformDecl = __nccwpck_require__(2589);
      let hackFlexDirection = __nccwpck_require__(912);
      let hackImageRendering = __nccwpck_require__(7453);
      let hackBackdropFilter = __nccwpck_require__(6667);
      let hackBackgroundClip = __nccwpck_require__(2781);
      let hackTextDecoration = __nccwpck_require__(3351);
      let hackJustifyContent = __nccwpck_require__(2845);
      let hackBackgroundSize = __nccwpck_require__(7397);
      let hackGridRowColumn = __nccwpck_require__(8041);
      let hackGridRowsColumns = __nccwpck_require__(9572);
      let hackGridColumnAlign = __nccwpck_require__(4621);
      let hackPrintColorAdjust = __nccwpck_require__(7899);
      let hackOverscrollBehavior = __nccwpck_require__(7879);
      let hackGridTemplateAreas = __nccwpck_require__(577);
      let hackTextEmphasisPosition = __nccwpck_require__(639);
      let hackTextDecorationSkipInk = __nccwpck_require__(2550);
      let hackGradient = __nccwpck_require__(9864);
      let hackIntrinsic = __nccwpck_require__(325);
      let hackPixelated = __nccwpck_require__(9683);
      let hackImageSet = __nccwpck_require__(3812);
      let hackCrossFade = __nccwpck_require__(2315);
      let hackDisplayFlex = __nccwpck_require__(9470);
      let hackDisplayGrid = __nccwpck_require__(5643);
      let hackFilterValue = __nccwpck_require__(6122);
      let hackAutofill = __nccwpck_require__(1242);
      Selector.hack(hackAutofill);
      Selector.hack(hackFullscreen);
      Selector.hack(hackPlaceholder);
      Selector.hack(hackPlaceholderShown);
      Selector.hack(hackFileSelectorButton);
      Declaration.hack(hackFlex);
      Declaration.hack(hackOrder);
      Declaration.hack(hackFilter);
      Declaration.hack(hackGridEnd);
      Declaration.hack(hackAnimation);
      Declaration.hack(hackFlexFlow);
      Declaration.hack(hackFlexGrow);
      Declaration.hack(hackFlexWrap);
      Declaration.hack(hackGridArea);
      Declaration.hack(hackPlaceSelf);
      Declaration.hack(hackGridStart);
      Declaration.hack(hackAlignSelf);
      Declaration.hack(hackAppearance);
      Declaration.hack(hackFlexBasis);
      Declaration.hack(hackMaskBorder);
      Declaration.hack(hackMaskComposite);
      Declaration.hack(hackAlignItems);
      Declaration.hack(hackUserSelect);
      Declaration.hack(hackFlexShrink);
      Declaration.hack(hackBreakProps);
      Declaration.hack(hackWritingMode);
      Declaration.hack(hackBorderImage);
      Declaration.hack(hackAlignContent);
      Declaration.hack(hackBorderRadius);
      Declaration.hack(hackBlockLogical);
      Declaration.hack(hackGridTemplate);
      Declaration.hack(hackInlineLogical);
      Declaration.hack(hackGridRowAlign);
      Declaration.hack(hackTransformDecl);
      Declaration.hack(hackFlexDirection);
      Declaration.hack(hackImageRendering);
      Declaration.hack(hackBackdropFilter);
      Declaration.hack(hackBackgroundClip);
      Declaration.hack(hackTextDecoration);
      Declaration.hack(hackJustifyContent);
      Declaration.hack(hackBackgroundSize);
      Declaration.hack(hackGridRowColumn);
      Declaration.hack(hackGridRowsColumns);
      Declaration.hack(hackGridColumnAlign);
      Declaration.hack(hackOverscrollBehavior);
      Declaration.hack(hackGridTemplateAreas);
      Declaration.hack(hackPrintColorAdjust);
      Declaration.hack(hackTextEmphasisPosition);
      Declaration.hack(hackTextDecorationSkipInk);
      Value.hack(hackGradient);
      Value.hack(hackIntrinsic);
      Value.hack(hackPixelated);
      Value.hack(hackImageSet);
      Value.hack(hackCrossFade);
      Value.hack(hackDisplayFlex);
      Value.hack(hackDisplayGrid);
      Value.hack(hackFilterValue);
      let declsCache = new Map();
      class Prefixes {
        constructor(data, browsers, options = {}) {
          this.data = data;
          this.browsers = browsers;
          this.options = options;
          [this.add, this.remove] = this.preprocess(this.select(this.data));
          this.transition = new Transition(this);
          this.processor = new Processor(this);
        }
        cleaner() {
          if (this.cleanerCache) {
            return this.cleanerCache;
          }
          if (this.browsers.selected.length) {
            let empty = new Browsers(this.browsers.data, []);
            this.cleanerCache = new Prefixes(this.data, empty, this.options);
          } else {
            return this;
          }
          return this.cleanerCache;
        }
        decl(prop) {
          if (!declsCache.has(prop)) {
            declsCache.set(prop, Declaration.load(prop));
          }
          return declsCache.get(prop);
        }
        group(decl) {
          let rule = decl.parent;
          let index = rule.index(decl);
          let { length } = rule.nodes;
          let unprefixed = this.unprefixed(decl.prop);
          let checker = (step, callback) => {
            index += step;
            while (index >= 0 && index < length) {
              let other = rule.nodes[index];
              if (other.type === "decl") {
                if (step === -1 && other.prop === unprefixed) {
                  if (!Browsers.withPrefix(other.value)) {
                    break;
                  }
                }
                if (this.unprefixed(other.prop) !== unprefixed) {
                  break;
                } else if (callback(other) === true) {
                  return true;
                }
                if (step === +1 && other.prop === unprefixed) {
                  if (!Browsers.withPrefix(other.value)) {
                    break;
                  }
                }
              }
              index += step;
            }
            return false;
          };
          return {
            down(callback) {
              return checker(+1, callback);
            },
            up(callback) {
              return checker(-1, callback);
            },
          };
        }
        normalize(prop) {
          return this.decl(prop).normalize(prop);
        }
        prefixed(prop, prefix) {
          prop = vendor.unprefixed(prop);
          return this.decl(prop).prefixed(prop, prefix);
        }
        preprocess(selected) {
          let add = {
            "@supports": new Supports(Prefixes, this),
            selectors: [],
          };
          for (let name in selected.add) {
            let prefixes = selected.add[name];
            if (name === "@keyframes" || name === "@viewport") {
              add[name] = new AtRule(name, prefixes, this);
            } else if (name === "@resolution") {
              add[name] = new Resolution(name, prefixes, this);
            } else if (this.data[name].selector) {
              add.selectors.push(Selector.load(name, prefixes, this));
            } else {
              let props = this.data[name].props;
              if (props) {
                let value = Value.load(name, prefixes, this);
                for (let prop of props) {
                  if (!add[prop]) {
                    add[prop] = { values: [] };
                  }
                  add[prop].values.push(value);
                }
              } else {
                let values = (add[name] && add[name].values) || [];
                add[name] = Declaration.load(name, prefixes, this);
                add[name].values = values;
              }
            }
          }
          let remove = { selectors: [] };
          for (let name in selected.remove) {
            let prefixes = selected.remove[name];
            if (this.data[name].selector) {
              let selector = Selector.load(name, prefixes);
              for (let prefix of prefixes) {
                remove.selectors.push(selector.old(prefix));
              }
            } else if (name === "@keyframes" || name === "@viewport") {
              for (let prefix of prefixes) {
                let prefixed = `@${prefix}${name.slice(1)}`;
                remove[prefixed] = { remove: true };
              }
            } else if (name === "@resolution") {
              remove[name] = new Resolution(name, prefixes, this);
            } else {
              let props = this.data[name].props;
              if (props) {
                let value = Value.load(name, [], this);
                for (let prefix of prefixes) {
                  let old = value.old(prefix);
                  if (old) {
                    for (let prop of props) {
                      if (!remove[prop]) {
                        remove[prop] = {};
                      }
                      if (!remove[prop].values) {
                        remove[prop].values = [];
                      }
                      remove[prop].values.push(old);
                    }
                  }
                }
              } else {
                for (let p of prefixes) {
                  let olds = this.decl(name).old(name, p);
                  if (name === "align-self") {
                    let a = add[name] && add[name].prefixes;
                    if (a) {
                      if (p === "-webkit- 2009" && a.includes("-webkit-")) {
                        continue;
                      } else if (
                        p === "-webkit-" &&
                        a.includes("-webkit- 2009")
                      ) {
                        continue;
                      }
                    }
                  }
                  for (let prefixed of olds) {
                    if (!remove[prefixed]) {
                      remove[prefixed] = {};
                    }
                    remove[prefixed].remove = true;
                  }
                }
              }
            }
          }
          return [add, remove];
        }
        select(list) {
          let selected = { add: {}, remove: {} };
          for (let name in list) {
            let data = list[name];
            let add = data.browsers.map((i) => {
              let params = i.split(" ");
              return { browser: `${params[0]} ${params[1]}`, note: params[2] };
            });
            let notes = add
              .filter((i) => i.note)
              .map((i) => `${this.browsers.prefix(i.browser)} ${i.note}`);
            notes = utils.uniq(notes);
            add = add
              .filter((i) => this.browsers.isSelected(i.browser))
              .map((i) => {
                let prefix = this.browsers.prefix(i.browser);
                if (i.note) {
                  return `${prefix} ${i.note}`;
                } else {
                  return prefix;
                }
              });
            add = this.sort(utils.uniq(add));
            if (this.options.flexbox === "no-2009") {
              add = add.filter((i) => !i.includes("2009"));
            }
            let all = data.browsers.map((i) => this.browsers.prefix(i));
            if (data.mistakes) {
              all = all.concat(data.mistakes);
            }
            all = all.concat(notes);
            all = utils.uniq(all);
            if (add.length) {
              selected.add[name] = add;
              if (add.length < all.length) {
                selected.remove[name] = all.filter((i) => !add.includes(i));
              }
            } else {
              selected.remove[name] = all;
            }
          }
          return selected;
        }
        sort(prefixes) {
          return prefixes.sort((a, b) => {
            let aLength = utils.removeNote(a).length;
            let bLength = utils.removeNote(b).length;
            if (aLength === bLength) {
              return b.length - a.length;
            } else {
              return bLength - aLength;
            }
          });
        }
        unprefixed(prop) {
          let value = this.normalize(vendor.unprefixed(prop));
          if (value === "flex-direction") {
            value = "flex-flow";
          }
          return value;
        }
        values(type, prop) {
          let data = this[type];
          let global = data["*"] && data["*"].values;
          let values = data[prop] && data[prop].values;
          if (global && values) {
            return utils.uniq(global.concat(values));
          } else {
            return global || values || [];
          }
        }
      }
      module.exports = Prefixes;
    },
    4108: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let parser = __nccwpck_require__(9285);
      let Value = __nccwpck_require__(2530);
      let insertAreas = __nccwpck_require__(3398).insertAreas;
      const OLD_LINEAR = /(^|[^-])linear-gradient\(\s*(top|left|right|bottom)/i;
      const OLD_RADIAL =
        /(^|[^-])radial-gradient\(\s*\d+(\w*|%)\s+\d+(\w*|%)\s*,/i;
      const IGNORE_NEXT = /(!\s*)?autoprefixer:\s*ignore\s+next/i;
      const GRID_REGEX =
        /(!\s*)?autoprefixer\s*grid:\s*(on|off|(no-)?autoplace)/i;
      const SIZES = [
        "width",
        "height",
        "min-width",
        "max-width",
        "min-height",
        "max-height",
        "inline-size",
        "min-inline-size",
        "max-inline-size",
        "block-size",
        "min-block-size",
        "max-block-size",
      ];
      function hasGridTemplate(decl) {
        return decl.parent.some(
          (i) => i.prop === "grid-template" || i.prop === "grid-template-areas",
        );
      }
      function hasRowsAndColumns(decl) {
        let hasRows = decl.parent.some((i) => i.prop === "grid-template-rows");
        let hasColumns = decl.parent.some(
          (i) => i.prop === "grid-template-columns",
        );
        return hasRows && hasColumns;
      }
      class Processor {
        constructor(prefixes) {
          this.prefixes = prefixes;
        }
        add(css, result) {
          let resolution = this.prefixes.add["@resolution"];
          let keyframes = this.prefixes.add["@keyframes"];
          let viewport = this.prefixes.add["@viewport"];
          let supports = this.prefixes.add["@supports"];
          css.walkAtRules((rule) => {
            if (rule.name === "keyframes") {
              if (!this.disabled(rule, result)) {
                return keyframes && keyframes.process(rule);
              }
            } else if (rule.name === "viewport") {
              if (!this.disabled(rule, result)) {
                return viewport && viewport.process(rule);
              }
            } else if (rule.name === "supports") {
              if (
                this.prefixes.options.supports !== false &&
                !this.disabled(rule, result)
              ) {
                return supports.process(rule);
              }
            } else if (
              rule.name === "media" &&
              rule.params.includes("-resolution")
            ) {
              if (!this.disabled(rule, result)) {
                return resolution && resolution.process(rule);
              }
            }
            return undefined;
          });
          css.walkRules((rule) => {
            if (this.disabled(rule, result)) return undefined;
            return this.prefixes.add.selectors.map((selector) =>
              selector.process(rule, result),
            );
          });
          function insideGrid(decl) {
            return decl.parent.nodes.some((node) => {
              if (node.type !== "decl") return false;
              let displayGrid =
                node.prop === "display" && /(inline-)?grid/.test(node.value);
              let gridTemplate = node.prop.startsWith("grid-template");
              let gridGap = /^grid-([A-z]+-)?gap/.test(node.prop);
              return displayGrid || gridTemplate || gridGap;
            });
          }
          let gridPrefixes =
            this.gridStatus(css, result) &&
            this.prefixes.add["grid-area"] &&
            this.prefixes.add["grid-area"].prefixes;
          css.walkDecls((decl) => {
            if (this.disabledDecl(decl, result)) return undefined;
            let parent = decl.parent;
            let prop = decl.prop;
            let value = decl.value;
            if (prop === "color-adjust") {
              if (parent.every((i) => i.prop !== "print-color-adjust")) {
                result.warn(
                  "Replace color-adjust to print-color-adjust. " +
                    "The color-adjust shorthand is currently deprecated.",
                  { node: decl },
                );
              }
            } else if (prop === "grid-row-span") {
              result.warn(
                "grid-row-span is not part of final Grid Layout. Use grid-row.",
                { node: decl },
              );
              return undefined;
            } else if (prop === "grid-column-span") {
              result.warn(
                "grid-column-span is not part of final Grid Layout. Use grid-column.",
                { node: decl },
              );
              return undefined;
            } else if (prop === "display" && value === "box") {
              result.warn(
                "You should write display: flex by final spec " +
                  "instead of display: box",
                { node: decl },
              );
              return undefined;
            } else if (prop === "text-emphasis-position") {
              if (value === "under" || value === "over") {
                result.warn(
                  "You should use 2 values for text-emphasis-position " +
                    "For example, `under left` instead of just `under`.",
                  { node: decl },
                );
              }
            } else if (prop === "text-decoration-skip" && value === "ink") {
              result.warn(
                "Replace text-decoration-skip: ink to " +
                  "text-decoration-skip-ink: auto, because spec had been changed",
                { node: decl },
              );
            } else {
              if (gridPrefixes && this.gridStatus(decl, result)) {
                if (decl.value === "subgrid") {
                  result.warn("IE does not support subgrid", { node: decl });
                }
                if (
                  /^(align|justify|place)-items$/.test(prop) &&
                  insideGrid(decl)
                ) {
                  let fixed = prop.replace("-items", "-self");
                  result.warn(
                    `IE does not support ${prop} on grid containers. ` +
                      `Try using ${fixed} on child elements instead: ` +
                      `${decl.parent.selector} > * { ${fixed}: ${decl.value} }`,
                    { node: decl },
                  );
                } else if (
                  /^(align|justify|place)-content$/.test(prop) &&
                  insideGrid(decl)
                ) {
                  result.warn(
                    `IE does not support ${decl.prop} on grid containers`,
                    { node: decl },
                  );
                } else if (prop === "display" && decl.value === "contents") {
                  result.warn(
                    "Please do not use display: contents; " +
                      "if you have grid setting enabled",
                    { node: decl },
                  );
                  return undefined;
                } else if (decl.prop === "grid-gap") {
                  let status = this.gridStatus(decl, result);
                  if (
                    status === "autoplace" &&
                    !hasRowsAndColumns(decl) &&
                    !hasGridTemplate(decl)
                  ) {
                    result.warn(
                      "grid-gap only works if grid-template(-areas) is being " +
                        "used or both rows and columns have been declared " +
                        "and cells have not been manually " +
                        "placed inside the explicit grid",
                      { node: decl },
                    );
                  } else if (
                    (status === true || status === "no-autoplace") &&
                    !hasGridTemplate(decl)
                  ) {
                    result.warn(
                      "grid-gap only works if grid-template(-areas) is being used",
                      { node: decl },
                    );
                  }
                } else if (prop === "grid-auto-columns") {
                  result.warn("grid-auto-columns is not supported by IE", {
                    node: decl,
                  });
                  return undefined;
                } else if (prop === "grid-auto-rows") {
                  result.warn("grid-auto-rows is not supported by IE", {
                    node: decl,
                  });
                  return undefined;
                } else if (prop === "grid-auto-flow") {
                  let hasRows = parent.some(
                    (i) => i.prop === "grid-template-rows",
                  );
                  let hasCols = parent.some(
                    (i) => i.prop === "grid-template-columns",
                  );
                  if (hasGridTemplate(decl)) {
                    result.warn("grid-auto-flow is not supported by IE", {
                      node: decl,
                    });
                  } else if (value.includes("dense")) {
                    result.warn(
                      "grid-auto-flow: dense is not supported by IE",
                      { node: decl },
                    );
                  } else if (!hasRows && !hasCols) {
                    result.warn(
                      "grid-auto-flow works only if grid-template-rows and " +
                        "grid-template-columns are present in the same rule",
                      { node: decl },
                    );
                  }
                  return undefined;
                } else if (value.includes("auto-fit")) {
                  result.warn("auto-fit value is not supported by IE", {
                    node: decl,
                    word: "auto-fit",
                  });
                  return undefined;
                } else if (value.includes("auto-fill")) {
                  result.warn("auto-fill value is not supported by IE", {
                    node: decl,
                    word: "auto-fill",
                  });
                  return undefined;
                } else if (
                  prop.startsWith("grid-template") &&
                  value.includes("[")
                ) {
                  result.warn(
                    "Autoprefixer currently does not support line names. " +
                      "Try using grid-template-areas instead.",
                    { node: decl, word: "[" },
                  );
                }
              }
              if (value.includes("radial-gradient")) {
                if (OLD_RADIAL.test(decl.value)) {
                  result.warn(
                    "Gradient has outdated direction syntax. " +
                      "New syntax is like `closest-side at 0 0` " +
                      "instead of `0 0, closest-side`.",
                    { node: decl },
                  );
                } else {
                  let ast = parser(value);
                  for (let i of ast.nodes) {
                    if (
                      i.type === "function" &&
                      i.value === "radial-gradient"
                    ) {
                      for (let word of i.nodes) {
                        if (word.type === "word") {
                          if (word.value === "cover") {
                            result.warn(
                              "Gradient has outdated direction syntax. " +
                                "Replace `cover` to `farthest-corner`.",
                              { node: decl },
                            );
                          } else if (word.value === "contain") {
                            result.warn(
                              "Gradient has outdated direction syntax. " +
                                "Replace `contain` to `closest-side`.",
                              { node: decl },
                            );
                          }
                        }
                      }
                    }
                  }
                }
              }
              if (value.includes("linear-gradient")) {
                if (OLD_LINEAR.test(value)) {
                  result.warn(
                    "Gradient has outdated direction syntax. " +
                      "New syntax is like `to left` instead of `right`.",
                    { node: decl },
                  );
                }
              }
            }
            if (SIZES.includes(decl.prop)) {
              if (!decl.value.includes("-fill-available")) {
                if (decl.value.includes("fill-available")) {
                  result.warn(
                    "Replace fill-available to stretch, " +
                      "because spec had been changed",
                    { node: decl },
                  );
                } else if (decl.value.includes("fill")) {
                  let ast = parser(value);
                  if (
                    ast.nodes.some(
                      (i) => i.type === "word" && i.value === "fill",
                    )
                  ) {
                    result.warn(
                      "Replace fill to stretch, because spec had been changed",
                      { node: decl },
                    );
                  }
                }
              }
            }
            let prefixer;
            if (
              decl.prop === "transition" ||
              decl.prop === "transition-property"
            ) {
              return this.prefixes.transition.add(decl, result);
            } else if (decl.prop === "align-self") {
              let display = this.displayType(decl);
              if (
                display !== "grid" &&
                this.prefixes.options.flexbox !== false
              ) {
                prefixer = this.prefixes.add["align-self"];
                if (prefixer && prefixer.prefixes) {
                  prefixer.process(decl);
                }
              }
              if (this.gridStatus(decl, result) !== false) {
                prefixer = this.prefixes.add["grid-row-align"];
                if (prefixer && prefixer.prefixes) {
                  return prefixer.process(decl, result);
                }
              }
            } else if (decl.prop === "justify-self") {
              if (this.gridStatus(decl, result) !== false) {
                prefixer = this.prefixes.add["grid-column-align"];
                if (prefixer && prefixer.prefixes) {
                  return prefixer.process(decl, result);
                }
              }
            } else if (decl.prop === "place-self") {
              prefixer = this.prefixes.add["place-self"];
              if (
                prefixer &&
                prefixer.prefixes &&
                this.gridStatus(decl, result) !== false
              ) {
                return prefixer.process(decl, result);
              }
            } else {
              prefixer = this.prefixes.add[decl.prop];
              if (prefixer && prefixer.prefixes) {
                return prefixer.process(decl, result);
              }
            }
            return undefined;
          });
          if (this.gridStatus(css, result)) {
            insertAreas(css, this.disabled);
          }
          return css.walkDecls((decl) => {
            if (this.disabledValue(decl, result)) return;
            let unprefixed = this.prefixes.unprefixed(decl.prop);
            let list = this.prefixes.values("add", unprefixed);
            if (Array.isArray(list)) {
              for (let value of list) {
                if (value.process) value.process(decl, result);
              }
            }
            Value.save(this.prefixes, decl);
          });
        }
        disabled(node, result) {
          if (!node) return false;
          if (node._autoprefixerDisabled !== undefined) {
            return node._autoprefixerDisabled;
          }
          if (node.parent) {
            let p = node.prev();
            if (p && p.type === "comment" && IGNORE_NEXT.test(p.text)) {
              node._autoprefixerDisabled = true;
              node._autoprefixerSelfDisabled = true;
              return true;
            }
          }
          let value = null;
          if (node.nodes) {
            let status;
            node.each((i) => {
              if (i.type !== "comment") return;
              if (/(!\s*)?autoprefixer:\s*(off|on)/i.test(i.text)) {
                if (typeof status !== "undefined") {
                  result.warn(
                    "Second Autoprefixer control comment " +
                      "was ignored. Autoprefixer applies control " +
                      "comment to whole block, not to next rules.",
                    { node: i },
                  );
                } else {
                  status = /on/i.test(i.text);
                }
              }
            });
            if (status !== undefined) {
              value = !status;
            }
          }
          if (!node.nodes || value === null) {
            if (node.parent) {
              let isParentDisabled = this.disabled(node.parent, result);
              if (node.parent._autoprefixerSelfDisabled === true) {
                value = false;
              } else {
                value = isParentDisabled;
              }
            } else {
              value = false;
            }
          }
          node._autoprefixerDisabled = value;
          return value;
        }
        disabledDecl(node, result) {
          if (node.type === "decl" && this.gridStatus(node, result) === false) {
            if (node.prop.includes("grid") || node.prop === "justify-items") {
              return true;
            }
          }
          if (node.type === "decl" && this.prefixes.options.flexbox === false) {
            let other = [
              "order",
              "justify-content",
              "align-items",
              "align-content",
            ];
            if (node.prop.includes("flex") || other.includes(node.prop)) {
              return true;
            }
          }
          return this.disabled(node, result);
        }
        disabledValue(node, result) {
          if (this.gridStatus(node, result) === false && node.type === "decl") {
            if (node.prop === "display" && node.value.includes("grid")) {
              return true;
            }
          }
          if (this.prefixes.options.flexbox === false && node.type === "decl") {
            if (node.prop === "display" && node.value.includes("flex")) {
              return true;
            }
          }
          if (node.type === "decl" && node.prop === "content") {
            return true;
          }
          return this.disabled(node, result);
        }
        displayType(decl) {
          for (let i of decl.parent.nodes) {
            if (i.prop !== "display") {
              continue;
            }
            if (i.value.includes("flex")) {
              return "flex";
            }
            if (i.value.includes("grid")) {
              return "grid";
            }
          }
          return false;
        }
        gridStatus(node, result) {
          if (!node) return false;
          if (node._autoprefixerGridStatus !== undefined) {
            return node._autoprefixerGridStatus;
          }
          let value = null;
          if (node.nodes) {
            let status;
            node.each((i) => {
              if (i.type !== "comment") return;
              if (GRID_REGEX.test(i.text)) {
                let hasAutoplace = /:\s*autoplace/i.test(i.text);
                let noAutoplace = /no-autoplace/i.test(i.text);
                if (typeof status !== "undefined") {
                  result.warn(
                    "Second Autoprefixer grid control comment was " +
                      "ignored. Autoprefixer applies control comments to the whole " +
                      "block, not to the next rules.",
                    { node: i },
                  );
                } else if (hasAutoplace) {
                  status = "autoplace";
                } else if (noAutoplace) {
                  status = true;
                } else {
                  status = /on/i.test(i.text);
                }
              }
            });
            if (status !== undefined) {
              value = status;
            }
          }
          if (node.type === "atrule" && node.name === "supports") {
            let params = node.params;
            if (params.includes("grid") && params.includes("auto")) {
              value = false;
            }
          }
          if (!node.nodes || value === null) {
            if (node.parent) {
              let isParentGrid = this.gridStatus(node.parent, result);
              if (node.parent._autoprefixerSelfDisabled === true) {
                value = false;
              } else {
                value = isParentGrid;
              }
            } else if (typeof this.prefixes.options.grid !== "undefined") {
              value = this.prefixes.options.grid;
            } else if (typeof process.env.AUTOPREFIXER_GRID !== "undefined") {
              if (process.env.AUTOPREFIXER_GRID === "autoplace") {
                value = "autoplace";
              } else {
                value = true;
              }
            } else {
              value = false;
            }
          }
          node._autoprefixerGridStatus = value;
          return value;
        }
        reduceSpaces(decl) {
          let stop = false;
          this.prefixes.group(decl).up(() => {
            stop = true;
            return true;
          });
          if (stop) {
            return;
          }
          let parts = decl.raw("before").split("\n");
          let prevMin = parts[parts.length - 1].length;
          let diff = false;
          this.prefixes.group(decl).down((other) => {
            parts = other.raw("before").split("\n");
            let last = parts.length - 1;
            if (parts[last].length > prevMin) {
              if (diff === false) {
                diff = parts[last].length - prevMin;
              }
              parts[last] = parts[last].slice(0, -diff);
              other.raws.before = parts.join("\n");
            }
          });
        }
        remove(css, result) {
          let resolution = this.prefixes.remove["@resolution"];
          css.walkAtRules((rule, i) => {
            if (this.prefixes.remove[`@${rule.name}`]) {
              if (!this.disabled(rule, result)) {
                rule.parent.removeChild(i);
              }
            } else if (
              rule.name === "media" &&
              rule.params.includes("-resolution") &&
              resolution
            ) {
              resolution.clean(rule);
            }
          });
          css.walkRules((rule, i) => {
            if (this.disabled(rule, result)) return;
            for (let checker of this.prefixes.remove.selectors) {
              if (checker.check(rule)) {
                rule.parent.removeChild(i);
                return;
              }
            }
          });
          return css.walkDecls((decl, i) => {
            if (this.disabled(decl, result)) return;
            let rule = decl.parent;
            let unprefixed = this.prefixes.unprefixed(decl.prop);
            if (
              decl.prop === "transition" ||
              decl.prop === "transition-property"
            ) {
              this.prefixes.transition.remove(decl);
            }
            if (
              this.prefixes.remove[decl.prop] &&
              this.prefixes.remove[decl.prop].remove
            ) {
              let notHack = this.prefixes
                .group(decl)
                .down(
                  (other) => this.prefixes.normalize(other.prop) === unprefixed,
                );
              if (unprefixed === "flex-flow") {
                notHack = true;
              }
              if (decl.prop === "-webkit-box-orient") {
                let hacks = { "flex-direction": true, "flex-flow": true };
                if (!decl.parent.some((j) => hacks[j.prop])) return;
              }
              if (notHack && !this.withHackValue(decl)) {
                if (decl.raw("before").includes("\n")) {
                  this.reduceSpaces(decl);
                }
                rule.removeChild(i);
                return;
              }
            }
            for (let checker of this.prefixes.values("remove", unprefixed)) {
              if (!checker.check) continue;
              if (!checker.check(decl.value)) continue;
              unprefixed = checker.unprefixed;
              let notHack = this.prefixes
                .group(decl)
                .down((other) => other.value.includes(unprefixed));
              if (notHack) {
                rule.removeChild(i);
                return;
              }
            }
          });
        }
        withHackValue(decl) {
          return (
            (decl.prop === "-webkit-background-clip" &&
              decl.value === "text") ||
            (decl.prop === "-webkit-box-orient" &&
              decl.parent.some((d) => d.prop === "-webkit-line-clamp"))
          );
        }
      }
      module.exports = Processor;
    },
    1675: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let FractionJs = __nccwpck_require__(6460);
      let Prefixer = __nccwpck_require__(6579);
      let utils = __nccwpck_require__(6584);
      const REGEXP = /(min|max)-resolution\s*:\s*\d*\.?\d+(dppx|dpcm|dpi|x)/gi;
      const SPLIT =
        /(min|max)-resolution(\s*:\s*)(\d*\.?\d+)(dppx|dpcm|dpi|x)/i;
      class Resolution extends Prefixer {
        clean(rule) {
          if (!this.bad) {
            this.bad = [];
            for (let prefix of this.prefixes) {
              this.bad.push(this.prefixName(prefix, "min"));
              this.bad.push(this.prefixName(prefix, "max"));
            }
          }
          rule.params = utils.editList(rule.params, (queries) =>
            queries.filter((query) =>
              this.bad.every((i) => !query.includes(i)),
            ),
          );
        }
        prefixName(prefix, name) {
          if (prefix === "-moz-") {
            return name + "--moz-device-pixel-ratio";
          } else {
            return prefix + name + "-device-pixel-ratio";
          }
        }
        prefixQuery(prefix, name, colon, value, units) {
          value = new FractionJs(value);
          if (units === "dpi") {
            value = value.div(96);
          } else if (units === "dpcm") {
            value = value.mul(2.54).div(96);
          }
          value = value.simplify();
          if (prefix === "-o-") {
            value = value.n + "/" + value.d;
          }
          return this.prefixName(prefix, name) + colon + value;
        }
        process(rule) {
          let parent = this.parentPrefix(rule);
          let prefixes = parent ? [parent] : this.prefixes;
          rule.params = utils.editList(rule.params, (origin, prefixed) => {
            for (let query of origin) {
              if (
                !query.includes("min-resolution") &&
                !query.includes("max-resolution")
              ) {
                prefixed.push(query);
                continue;
              }
              for (let prefix of prefixes) {
                let processed = query.replace(REGEXP, (str) => {
                  let parts = str.match(SPLIT);
                  return this.prefixQuery(
                    prefix,
                    parts[1],
                    parts[2],
                    parts[3],
                    parts[4],
                  );
                });
                prefixed.push(processed);
              }
              prefixed.push(query);
            }
            return utils.uniq(prefixed);
          });
        }
      }
      module.exports = Resolution;
    },
    2098: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let { list } = __nccwpck_require__(977);
      let OldSelector = __nccwpck_require__(7964);
      let Prefixer = __nccwpck_require__(6579);
      let Browsers = __nccwpck_require__(931);
      let utils = __nccwpck_require__(6584);
      class Selector extends Prefixer {
        constructor(name, prefixes, all) {
          super(name, prefixes, all);
          this.regexpCache = new Map();
        }
        add(rule, prefix) {
          let prefixeds = this.prefixeds(rule);
          if (this.already(rule, prefixeds, prefix)) {
            return;
          }
          let cloned = this.clone(rule, {
            selector: prefixeds[this.name][prefix],
          });
          rule.parent.insertBefore(rule, cloned);
        }
        already(rule, prefixeds, prefix) {
          let index = rule.parent.index(rule) - 1;
          while (index >= 0) {
            let before = rule.parent.nodes[index];
            if (before.type !== "rule") {
              return false;
            }
            let some = false;
            for (let key in prefixeds[this.name]) {
              let prefixed = prefixeds[this.name][key];
              if (before.selector === prefixed) {
                if (prefix === key) {
                  return true;
                } else {
                  some = true;
                  break;
                }
              }
            }
            if (!some) {
              return false;
            }
            index -= 1;
          }
          return false;
        }
        check(rule) {
          if (rule.selector.includes(this.name)) {
            return !!rule.selector.match(this.regexp());
          }
          return false;
        }
        old(prefix) {
          return new OldSelector(this, prefix);
        }
        possible() {
          return Browsers.prefixes();
        }
        prefixed(prefix) {
          return this.name.replace(/^(\W*)/, `$1${prefix}`);
        }
        prefixeds(rule) {
          if (rule._autoprefixerPrefixeds) {
            if (rule._autoprefixerPrefixeds[this.name]) {
              return rule._autoprefixerPrefixeds;
            }
          } else {
            rule._autoprefixerPrefixeds = {};
          }
          let prefixeds = {};
          if (rule.selector.includes(",")) {
            let ruleParts = list.comma(rule.selector);
            let toProcess = ruleParts.filter((el) => el.includes(this.name));
            for (let prefix of this.possible()) {
              prefixeds[prefix] = toProcess
                .map((el) => this.replace(el, prefix))
                .join(", ");
            }
          } else {
            for (let prefix of this.possible()) {
              prefixeds[prefix] = this.replace(rule.selector, prefix);
            }
          }
          rule._autoprefixerPrefixeds[this.name] = prefixeds;
          return rule._autoprefixerPrefixeds;
        }
        regexp(prefix) {
          if (!this.regexpCache.has(prefix)) {
            let name = prefix ? this.prefixed(prefix) : this.name;
            this.regexpCache.set(
              prefix,
              new RegExp(`(^|[^:"'=])${utils.escapeRegexp(name)}`, "gi"),
            );
          }
          return this.regexpCache.get(prefix);
        }
        replace(selector, prefix) {
          return selector.replace(this.regexp(), `$1${this.prefixed(prefix)}`);
        }
      }
      module.exports = Selector;
    },
    6689: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let featureQueries = __nccwpck_require__(8944);
      let feature = __nccwpck_require__(1711);
      let { parse } = __nccwpck_require__(977);
      let Browsers = __nccwpck_require__(931);
      let brackets = __nccwpck_require__(9137);
      let Value = __nccwpck_require__(2530);
      let utils = __nccwpck_require__(6584);
      let data = feature(featureQueries);
      let supported = [];
      for (let browser in data.stats) {
        let versions = data.stats[browser];
        for (let version in versions) {
          let support = versions[version];
          if (/y/.test(support)) {
            supported.push(browser + " " + version);
          }
        }
      }
      class Supports {
        constructor(Prefixes, all) {
          this.Prefixes = Prefixes;
          this.all = all;
        }
        add(nodes, all) {
          return nodes.map((i) => {
            if (this.isProp(i)) {
              let prefixed = this.prefixed(i[0]);
              if (prefixed.length > 1) {
                return this.convert(prefixed);
              }
              return i;
            }
            if (typeof i === "object") {
              return this.add(i, all);
            }
            return i;
          });
        }
        cleanBrackets(nodes) {
          return nodes.map((i) => {
            if (typeof i !== "object") {
              return i;
            }
            if (i.length === 1 && typeof i[0] === "object") {
              return this.cleanBrackets(i[0]);
            }
            return this.cleanBrackets(i);
          });
        }
        convert(progress) {
          let result = [""];
          for (let i of progress) {
            result.push([`${i.prop}: ${i.value}`]);
            result.push(" or ");
          }
          result[result.length - 1] = "";
          return result;
        }
        disabled(node) {
          if (!this.all.options.grid) {
            if (node.prop === "display" && node.value.includes("grid")) {
              return true;
            }
            if (node.prop.includes("grid") || node.prop === "justify-items") {
              return true;
            }
          }
          if (this.all.options.flexbox === false) {
            if (node.prop === "display" && node.value.includes("flex")) {
              return true;
            }
            let other = [
              "order",
              "justify-content",
              "align-items",
              "align-content",
            ];
            if (node.prop.includes("flex") || other.includes(node.prop)) {
              return true;
            }
          }
          return false;
        }
        isHack(all, unprefixed) {
          let check = new RegExp(`(\\(|\\s)${utils.escapeRegexp(unprefixed)}:`);
          return !check.test(all);
        }
        isNot(node) {
          return typeof node === "string" && /not\s*/i.test(node);
        }
        isOr(node) {
          return typeof node === "string" && /\s*or\s*/i.test(node);
        }
        isProp(node) {
          return (
            typeof node === "object" &&
            node.length === 1 &&
            typeof node[0] === "string"
          );
        }
        normalize(nodes) {
          if (typeof nodes !== "object") {
            return nodes;
          }
          nodes = nodes.filter((i) => i !== "");
          if (typeof nodes[0] === "string") {
            let firstNode = nodes[0].trim();
            if (
              firstNode.includes(":") ||
              firstNode === "selector" ||
              firstNode === "not selector"
            ) {
              return [brackets.stringify(nodes)];
            }
          }
          return nodes.map((i) => this.normalize(i));
        }
        parse(str) {
          let parts = str.split(":");
          let prop = parts[0];
          let value = parts[1];
          if (!value) value = "";
          return [prop.trim(), value.trim()];
        }
        prefixed(str) {
          let rule = this.virtual(str);
          if (this.disabled(rule.first)) {
            return rule.nodes;
          }
          let result = { warn: () => null };
          let prefixer = this.prefixer().add[rule.first.prop];
          prefixer && prefixer.process && prefixer.process(rule.first, result);
          for (let decl of rule.nodes) {
            for (let value of this.prefixer().values("add", rule.first.prop)) {
              value.process(decl);
            }
            Value.save(this.all, decl);
          }
          return rule.nodes;
        }
        prefixer() {
          if (this.prefixerCache) {
            return this.prefixerCache;
          }
          let filtered = this.all.browsers.selected.filter((i) =>
            supported.includes(i),
          );
          let browsers = new Browsers(
            this.all.browsers.data,
            filtered,
            this.all.options,
          );
          this.prefixerCache = new this.Prefixes(
            this.all.data,
            browsers,
            this.all.options,
          );
          return this.prefixerCache;
        }
        process(rule) {
          let ast = brackets.parse(rule.params);
          ast = this.normalize(ast);
          ast = this.remove(ast, rule.params);
          ast = this.add(ast, rule.params);
          ast = this.cleanBrackets(ast);
          rule.params = brackets.stringify(ast);
        }
        remove(nodes, all) {
          let i = 0;
          while (i < nodes.length) {
            if (
              !this.isNot(nodes[i - 1]) &&
              this.isProp(nodes[i]) &&
              this.isOr(nodes[i + 1])
            ) {
              if (this.toRemove(nodes[i][0], all)) {
                nodes.splice(i, 2);
                continue;
              }
              i += 2;
              continue;
            }
            if (typeof nodes[i] === "object") {
              nodes[i] = this.remove(nodes[i], all);
            }
            i += 1;
          }
          return nodes;
        }
        toRemove(str, all) {
          let [prop, value] = this.parse(str);
          let unprefixed = this.all.unprefixed(prop);
          let cleaner = this.all.cleaner();
          if (
            cleaner.remove[prop] &&
            cleaner.remove[prop].remove &&
            !this.isHack(all, unprefixed)
          ) {
            return true;
          }
          for (let checker of cleaner.values("remove", unprefixed)) {
            if (checker.check(value)) {
              return true;
            }
          }
          return false;
        }
        virtual(str) {
          let [prop, value] = this.parse(str);
          let rule = parse("a{}").first;
          rule.append({ prop, raws: { before: "" }, value });
          return rule;
        }
      }
      module.exports = Supports;
    },
    960: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let { list } = __nccwpck_require__(977);
      let parser = __nccwpck_require__(9285);
      let Browsers = __nccwpck_require__(931);
      let vendor = __nccwpck_require__(2667);
      class Transition {
        constructor(prefixes) {
          this.props = ["transition", "transition-property"];
          this.prefixes = prefixes;
        }
        add(decl, result) {
          let prefix, prop;
          let add = this.prefixes.add[decl.prop];
          let vendorPrefixes = this.ruleVendorPrefixes(decl);
          let declPrefixes = vendorPrefixes || (add && add.prefixes) || [];
          let params = this.parse(decl.value);
          let names = params.map((i) => this.findProp(i));
          let added = [];
          if (names.some((i) => i[0] === "-")) {
            return;
          }
          for (let param of params) {
            prop = this.findProp(param);
            if (prop[0] === "-") continue;
            let prefixer = this.prefixes.add[prop];
            if (!prefixer || !prefixer.prefixes) continue;
            for (prefix of prefixer.prefixes) {
              if (
                vendorPrefixes &&
                !vendorPrefixes.some((p) => prefix.includes(p))
              ) {
                continue;
              }
              let prefixed = this.prefixes.prefixed(prop, prefix);
              if (prefixed !== "-ms-transform" && !names.includes(prefixed)) {
                if (!this.disabled(prop, prefix)) {
                  added.push(this.clone(prop, prefixed, param));
                }
              }
            }
          }
          params = params.concat(added);
          let value = this.stringify(params);
          let webkitClean = this.stringify(
            this.cleanFromUnprefixed(params, "-webkit-"),
          );
          if (declPrefixes.includes("-webkit-")) {
            this.cloneBefore(decl, `-webkit-${decl.prop}`, webkitClean);
          }
          this.cloneBefore(decl, decl.prop, webkitClean);
          if (declPrefixes.includes("-o-")) {
            let operaClean = this.stringify(
              this.cleanFromUnprefixed(params, "-o-"),
            );
            this.cloneBefore(decl, `-o-${decl.prop}`, operaClean);
          }
          for (prefix of declPrefixes) {
            if (prefix !== "-webkit-" && prefix !== "-o-") {
              let prefixValue = this.stringify(
                this.cleanOtherPrefixes(params, prefix),
              );
              this.cloneBefore(decl, prefix + decl.prop, prefixValue);
            }
          }
          if (value !== decl.value && !this.already(decl, decl.prop, value)) {
            this.checkForWarning(result, decl);
            decl.cloneBefore();
            decl.value = value;
          }
        }
        already(decl, prop, value) {
          return decl.parent.some((i) => i.prop === prop && i.value === value);
        }
        checkForWarning(result, decl) {
          if (decl.prop !== "transition-property") {
            return;
          }
          let isPrefixed = false;
          let hasAssociatedProp = false;
          decl.parent.each((i) => {
            if (i.type !== "decl") {
              return undefined;
            }
            if (i.prop.indexOf("transition-") !== 0) {
              return undefined;
            }
            let values = list.comma(i.value);
            if (i.prop === "transition-property") {
              values.forEach((value) => {
                let lookup = this.prefixes.add[value];
                if (lookup && lookup.prefixes && lookup.prefixes.length > 0) {
                  isPrefixed = true;
                }
              });
              return undefined;
            }
            hasAssociatedProp = hasAssociatedProp || values.length > 1;
            return false;
          });
          if (isPrefixed && hasAssociatedProp) {
            decl.warn(
              result,
              "Replace transition-property to transition, " +
                "because Autoprefixer could not support " +
                "any cases of transition-property " +
                "and other transition-*",
            );
          }
        }
        cleanFromUnprefixed(params, prefix) {
          let remove = params
            .map((i) => this.findProp(i))
            .filter((i) => i.slice(0, prefix.length) === prefix)
            .map((i) => this.prefixes.unprefixed(i));
          let result = [];
          for (let param of params) {
            let prop = this.findProp(param);
            let p = vendor.prefix(prop);
            if (!remove.includes(prop) && (p === prefix || p === "")) {
              result.push(param);
            }
          }
          return result;
        }
        cleanOtherPrefixes(params, prefix) {
          return params.filter((param) => {
            let current = vendor.prefix(this.findProp(param));
            return current === "" || current === prefix;
          });
        }
        clone(origin, name, param) {
          let result = [];
          let changed = false;
          for (let i of param) {
            if (!changed && i.type === "word" && i.value === origin) {
              result.push({ type: "word", value: name });
              changed = true;
            } else {
              result.push(i);
            }
          }
          return result;
        }
        cloneBefore(decl, prop, value) {
          if (!this.already(decl, prop, value)) {
            decl.cloneBefore({ prop, value });
          }
        }
        disabled(prop, prefix) {
          let other = [
            "order",
            "justify-content",
            "align-self",
            "align-content",
          ];
          if (prop.includes("flex") || other.includes(prop)) {
            if (this.prefixes.options.flexbox === false) {
              return true;
            }
            if (this.prefixes.options.flexbox === "no-2009") {
              return prefix.includes("2009");
            }
          }
          return undefined;
        }
        div(params) {
          for (let param of params) {
            for (let node of param) {
              if (node.type === "div" && node.value === ",") {
                return node;
              }
            }
          }
          return { after: " ", type: "div", value: "," };
        }
        findProp(param) {
          let prop = param[0].value;
          if (/^\d/.test(prop)) {
            for (let [i, token] of param.entries()) {
              if (i !== 0 && token.type === "word") {
                return token.value;
              }
            }
          }
          return prop;
        }
        parse(value) {
          let ast = parser(value);
          let result = [];
          let param = [];
          for (let node of ast.nodes) {
            param.push(node);
            if (node.type === "div" && node.value === ",") {
              result.push(param);
              param = [];
            }
          }
          result.push(param);
          return result.filter((i) => i.length > 0);
        }
        remove(decl) {
          let params = this.parse(decl.value);
          params = params.filter((i) => {
            let prop = this.prefixes.remove[this.findProp(i)];
            return !prop || !prop.remove;
          });
          let value = this.stringify(params);
          if (decl.value === value) {
            return;
          }
          if (params.length === 0) {
            decl.remove();
            return;
          }
          let double = decl.parent.some(
            (i) => i.prop === decl.prop && i.value === value,
          );
          let smaller = decl.parent.some(
            (i) =>
              i !== decl &&
              i.prop === decl.prop &&
              i.value.length > value.length,
          );
          if (double || smaller) {
            decl.remove();
            return;
          }
          decl.value = value;
        }
        ruleVendorPrefixes(decl) {
          let { parent } = decl;
          if (parent.type !== "rule") {
            return false;
          } else if (!parent.selector.includes(":-")) {
            return false;
          }
          let selectors = Browsers.prefixes().filter((s) =>
            parent.selector.includes(":" + s),
          );
          return selectors.length > 0 ? selectors : false;
        }
        stringify(params) {
          if (params.length === 0) {
            return "";
          }
          let nodes = [];
          for (let param of params) {
            if (param[param.length - 1].type !== "div") {
              param.push(this.div(params));
            }
            nodes = nodes.concat(param);
          }
          if (nodes[0].type === "div") {
            nodes = nodes.slice(1);
          }
          if (nodes[nodes.length - 1].type === "div") {
            nodes = nodes.slice(0, +-2 + 1 || 0);
          }
          return parser.stringify({ nodes });
        }
      }
      module.exports = Transition;
    },
    6584: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let { list } = __nccwpck_require__(977);
      module.exports.error = function (text) {
        let err = new Error(text);
        err.autoprefixer = true;
        throw err;
      };
      module.exports.uniq = function (array) {
        return [...new Set(array)];
      };
      module.exports.removeNote = function (string) {
        if (!string.includes(" ")) {
          return string;
        }
        return string.split(" ")[0];
      };
      module.exports.escapeRegexp = function (string) {
        return string.replace(/[$()*+-.?[\\\]^{|}]/g, "\\$&");
      };
      module.exports.regexp = function (word, escape = true) {
        if (escape) {
          word = this.escapeRegexp(word);
        }
        return new RegExp(`(^|[\\s,(])(${word}($|[\\s(,]))`, "gi");
      };
      module.exports.editList = function (value, callback) {
        let origin = list.comma(value);
        let changed = callback(origin, []);
        if (origin === changed) {
          return value;
        }
        let join = value.match(/,\s*/);
        join = join ? join[0] : ", ";
        return changed.join(join);
      };
      module.exports.splitSelector = function (selector) {
        return list
          .comma(selector)
          .map((i) => list.space(i).map((k) => k.split(/(?=\.|#)/g)));
      };
      module.exports.isPureNumber = function (value) {
        if (typeof value === "number") {
          return true;
        }
        if (typeof value === "string") {
          return /^[0-9]+$/.test(value);
        }
        return false;
      };
    },
    2530: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let Prefixer = __nccwpck_require__(6579);
      let OldValue = __nccwpck_require__(6029);
      let vendor = __nccwpck_require__(2667);
      let utils = __nccwpck_require__(6584);
      class Value extends Prefixer {
        static save(prefixes, decl) {
          let prop = decl.prop;
          let result = [];
          for (let prefix in decl._autoprefixerValues) {
            let value = decl._autoprefixerValues[prefix];
            if (value === decl.value) {
              continue;
            }
            let item;
            let propPrefix = vendor.prefix(prop);
            if (propPrefix === "-pie-") {
              continue;
            }
            if (propPrefix === prefix) {
              item = decl.value = value;
              result.push(item);
              continue;
            }
            let prefixed = prefixes.prefixed(prop, prefix);
            let rule = decl.parent;
            if (!rule.every((i) => i.prop !== prefixed)) {
              result.push(item);
              continue;
            }
            let trimmed = value.replace(/\s+/, " ");
            let already = rule.some(
              (i) =>
                i.prop === decl.prop && i.value.replace(/\s+/, " ") === trimmed,
            );
            if (already) {
              result.push(item);
              continue;
            }
            let cloned = this.clone(decl, { value });
            item = decl.parent.insertBefore(decl, cloned);
            result.push(item);
          }
          return result;
        }
        add(decl, prefix) {
          if (!decl._autoprefixerValues) {
            decl._autoprefixerValues = {};
          }
          let value = decl._autoprefixerValues[prefix] || this.value(decl);
          let before;
          do {
            before = value;
            value = this.replace(value, prefix);
            if (value === false) return;
          } while (value !== before);
          decl._autoprefixerValues[prefix] = value;
        }
        check(decl) {
          let value = decl.value;
          if (!value.includes(this.name)) {
            return false;
          }
          return !!value.match(this.regexp());
        }
        old(prefix) {
          return new OldValue(this.name, prefix + this.name);
        }
        regexp() {
          return (
            this.regexpCache || (this.regexpCache = utils.regexp(this.name))
          );
        }
        replace(string, prefix) {
          return string.replace(this.regexp(), `$1${prefix}$2`);
        }
        value(decl) {
          if (decl.raws.value && decl.raws.value.value === decl.value) {
            return decl.raws.value.raw;
          } else {
            return decl.value;
          }
        }
      }
      module.exports = Value;
    },
    2667: (module) => {
      module.exports = {
        prefix(prop) {
          let match = prop.match(/^(-\w+-)/);
          if (match) {
            return match[0];
          }
          return "";
        },
        unprefixed(prop) {
          return prop.replace(/^-\w+-/, "");
        },
      };
    },
    2498: (module) => {
      function BrowserslistError(message) {
        this.name = "BrowserslistError";
        this.message = message;
        this.browserslist = true;
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, BrowserslistError);
        }
      }
      BrowserslistError.prototype = Error.prototype;
      module.exports = BrowserslistError;
    },
    5478: (module, __unused_webpack_exports, __nccwpck_require__) => {
      var jsReleases = __nccwpck_require__(6052);
      var agents = __nccwpck_require__(3768).agents;
      var jsEOL = __nccwpck_require__(8864);
      var path = __nccwpck_require__(1017);
      var e2c = __nccwpck_require__(6719);
      var BrowserslistError = __nccwpck_require__(2498);
      var parse = __nccwpck_require__(8046);
      var env = __nccwpck_require__(486);
      var YEAR = 365.259641 * 24 * 60 * 60 * 1e3;
      var ANDROID_EVERGREEN_FIRST = "37";
      var OP_MOB_BLINK_FIRST = 14;
      function isVersionsMatch(versionA, versionB) {
        return (versionA + ".").indexOf(versionB + ".") === 0;
      }
      function isEolReleased(name) {
        var version = name.slice(1);
        return browserslist.nodeVersions.some(function (i) {
          return isVersionsMatch(i, version);
        });
      }
      function normalize(versions) {
        return versions.filter(function (version) {
          return typeof version === "string";
        });
      }
      function normalizeElectron(version) {
        var versionToUse = version;
        if (version.split(".").length === 3) {
          versionToUse = version.split(".").slice(0, -1).join(".");
        }
        return versionToUse;
      }
      function nameMapper(name) {
        return function mapName(version) {
          return name + " " + version;
        };
      }
      function getMajor(version) {
        return parseInt(version.split(".")[0]);
      }
      function getMajorVersions(released, number) {
        if (released.length === 0) return [];
        var majorVersions = uniq(released.map(getMajor));
        var minimum = majorVersions[majorVersions.length - number];
        if (!minimum) {
          return released;
        }
        var selected = [];
        for (var i = released.length - 1; i >= 0; i--) {
          if (minimum > getMajor(released[i])) break;
          selected.unshift(released[i]);
        }
        return selected;
      }
      function uniq(array) {
        var filtered = [];
        for (var i = 0; i < array.length; i++) {
          if (filtered.indexOf(array[i]) === -1) filtered.push(array[i]);
        }
        return filtered;
      }
      function fillUsage(result, name, data) {
        for (var i in data) {
          result[name + " " + i] = data[i];
        }
      }
      function generateFilter(sign, version) {
        version = parseFloat(version);
        if (sign === ">") {
          return function (v) {
            return parseLatestFloat(v) > version;
          };
        } else if (sign === ">=") {
          return function (v) {
            return parseLatestFloat(v) >= version;
          };
        } else if (sign === "<") {
          return function (v) {
            return parseFloat(v) < version;
          };
        } else {
          return function (v) {
            return parseFloat(v) <= version;
          };
        }
        function parseLatestFloat(v) {
          return parseFloat(v.split("-")[1] || v);
        }
      }
      function generateSemverFilter(sign, version) {
        version = version.split(".").map(parseSimpleInt);
        version[1] = version[1] || 0;
        version[2] = version[2] || 0;
        if (sign === ">") {
          return function (v) {
            v = v.split(".").map(parseSimpleInt);
            return compareSemver(v, version) > 0;
          };
        } else if (sign === ">=") {
          return function (v) {
            v = v.split(".").map(parseSimpleInt);
            return compareSemver(v, version) >= 0;
          };
        } else if (sign === "<") {
          return function (v) {
            v = v.split(".").map(parseSimpleInt);
            return compareSemver(version, v) > 0;
          };
        } else {
          return function (v) {
            v = v.split(".").map(parseSimpleInt);
            return compareSemver(version, v) >= 0;
          };
        }
      }
      function parseSimpleInt(x) {
        return parseInt(x);
      }
      function compare(a, b) {
        if (a < b) return -1;
        if (a > b) return +1;
        return 0;
      }
      function compareSemver(a, b) {
        return (
          compare(parseInt(a[0]), parseInt(b[0])) ||
          compare(parseInt(a[1] || "0"), parseInt(b[1] || "0")) ||
          compare(parseInt(a[2] || "0"), parseInt(b[2] || "0"))
        );
      }
      function semverFilterLoose(operator, range) {
        range = range.split(".").map(parseSimpleInt);
        if (typeof range[1] === "undefined") {
          range[1] = "x";
        }
        switch (operator) {
          case "<=":
            return function (version) {
              version = version.split(".").map(parseSimpleInt);
              return compareSemverLoose(version, range) <= 0;
            };
          case ">=":
          default:
            return function (version) {
              version = version.split(".").map(parseSimpleInt);
              return compareSemverLoose(version, range) >= 0;
            };
        }
      }
      function compareSemverLoose(version, range) {
        if (version[0] !== range[0]) {
          return version[0] < range[0] ? -1 : +1;
        }
        if (range[1] === "x") {
          return 0;
        }
        if (version[1] !== range[1]) {
          return version[1] < range[1] ? -1 : +1;
        }
        return 0;
      }
      function resolveVersion(data, version) {
        if (data.versions.indexOf(version) !== -1) {
          return version;
        } else if (browserslist.versionAliases[data.name][version]) {
          return browserslist.versionAliases[data.name][version];
        } else {
          return false;
        }
      }
      function normalizeVersion(data, version) {
        var resolved = resolveVersion(data, version);
        if (resolved) {
          return resolved;
        } else if (data.versions.length === 1) {
          return data.versions[0];
        } else {
          return false;
        }
      }
      function filterByYear(since, context) {
        since = since / 1e3;
        return Object.keys(agents).reduce(function (selected, name) {
          var data = byName(name, context);
          if (!data) return selected;
          var versions = Object.keys(data.releaseDate).filter(function (v) {
            var date = data.releaseDate[v];
            return date !== null && date >= since;
          });
          return selected.concat(versions.map(nameMapper(data.name)));
        }, []);
      }
      function cloneData(data) {
        return {
          name: data.name,
          versions: data.versions,
          released: data.released,
          releaseDate: data.releaseDate,
        };
      }
      function byName(name, context) {
        name = name.toLowerCase();
        name = browserslist.aliases[name] || name;
        if (context.mobileToDesktop && browserslist.desktopNames[name]) {
          var desktop = browserslist.data[browserslist.desktopNames[name]];
          if (name === "android") {
            return normalizeAndroidData(
              cloneData(browserslist.data[name]),
              desktop,
            );
          } else {
            var cloned = cloneData(desktop);
            cloned.name = name;
            return cloned;
          }
        }
        return browserslist.data[name];
      }
      function normalizeAndroidVersions(androidVersions, chromeVersions) {
        var iFirstEvergreen = chromeVersions.indexOf(ANDROID_EVERGREEN_FIRST);
        return androidVersions
          .filter(function (version) {
            return /^(?:[2-4]\.|[34]$)/.test(version);
          })
          .concat(chromeVersions.slice(iFirstEvergreen));
      }
      function copyObject(obj) {
        var copy = {};
        for (var key in obj) {
          copy[key] = obj[key];
        }
        return copy;
      }
      function normalizeAndroidData(android, chrome) {
        android.released = normalizeAndroidVersions(
          android.released,
          chrome.released,
        );
        android.versions = normalizeAndroidVersions(
          android.versions,
          chrome.versions,
        );
        android.releaseDate = copyObject(android.releaseDate);
        android.released.forEach(function (v) {
          if (android.releaseDate[v] === undefined) {
            android.releaseDate[v] = chrome.releaseDate[v];
          }
        });
        return android;
      }
      function checkName(name, context) {
        var data = byName(name, context);
        if (!data) throw new BrowserslistError("Unknown browser " + name);
        return data;
      }
      function unknownQuery(query) {
        return new BrowserslistError(
          "Unknown browser query `" +
            query +
            "`. " +
            "Maybe you are using old Browserslist or made typo in query.",
        );
      }
      function filterJumps(list, name, nVersions, context) {
        var jump = 1;
        switch (name) {
          case "android":
            if (context.mobileToDesktop) return list;
            var released = browserslist.data.chrome.released;
            jump = released.length - released.indexOf(ANDROID_EVERGREEN_FIRST);
            break;
          case "op_mob":
            var latest = browserslist.data.op_mob.released.slice(-1)[0];
            jump = getMajor(latest) - OP_MOB_BLINK_FIRST + 1;
            break;
          default:
            return list;
        }
        if (nVersions <= jump) {
          return list.slice(-1);
        }
        return list.slice(jump - 1 - nVersions);
      }
      function isSupported(flags, withPartial) {
        return (
          typeof flags === "string" &&
          (flags.indexOf("y") >= 0 || (withPartial && flags.indexOf("a") >= 0))
        );
      }
      function resolve(queries, context) {
        return parse(QUERIES, queries).reduce(function (result, node, index) {
          if (node.not && index === 0) {
            throw new BrowserslistError(
              "Write any browsers query (for instance, `defaults`) " +
                "before `" +
                node.query +
                "`",
            );
          }
          var type = QUERIES[node.type];
          var array = type.select
            .call(browserslist, context, node)
            .map(function (j) {
              var parts = j.split(" ");
              if (parts[1] === "0") {
                return parts[0] + " " + byName(parts[0], context).versions[0];
              } else {
                return j;
              }
            });
          if (node.compose === "and") {
            if (node.not) {
              return result.filter(function (j) {
                return array.indexOf(j) === -1;
              });
            } else {
              return result.filter(function (j) {
                return array.indexOf(j) !== -1;
              });
            }
          } else {
            if (node.not) {
              var filter = {};
              array.forEach(function (j) {
                filter[j] = true;
              });
              return result.filter(function (j) {
                return !filter[j];
              });
            }
            return result.concat(array);
          }
        }, []);
      }
      function prepareOpts(opts) {
        if (typeof opts === "undefined") opts = {};
        if (typeof opts.path === "undefined") {
          opts.path = path.resolve ? path.resolve(".") : ".";
        }
        return opts;
      }
      function prepareQueries(queries, opts) {
        if (typeof queries === "undefined" || queries === null) {
          var config = browserslist.loadConfig(opts);
          if (config) {
            queries = config;
          } else {
            queries = browserslist.defaults;
          }
        }
        return queries;
      }
      function checkQueries(queries) {
        if (!(typeof queries === "string" || Array.isArray(queries))) {
          throw new BrowserslistError(
            "Browser queries must be an array or string. Got " +
              typeof queries +
              ".",
          );
        }
      }
      var cache = {};
      function browserslist(queries, opts) {
        opts = prepareOpts(opts);
        queries = prepareQueries(queries, opts);
        checkQueries(queries);
        var context = {
          ignoreUnknownVersions: opts.ignoreUnknownVersions,
          dangerousExtend: opts.dangerousExtend,
          mobileToDesktop: opts.mobileToDesktop,
          path: opts.path,
          env: opts.env,
        };
        env.oldDataWarning(browserslist.data);
        var stats = env.getStat(opts, browserslist.data);
        if (stats) {
          context.customUsage = {};
          for (var browser in stats) {
            fillUsage(context.customUsage, browser, stats[browser]);
          }
        }
        var cacheKey = JSON.stringify([queries, context]);
        if (cache[cacheKey]) return cache[cacheKey];
        var result = uniq(resolve(queries, context)).sort(
          function (name1, name2) {
            name1 = name1.split(" ");
            name2 = name2.split(" ");
            if (name1[0] === name2[0]) {
              var version1 = name1[1].split("-")[0];
              var version2 = name2[1].split("-")[0];
              return compareSemver(version2.split("."), version1.split("."));
            } else {
              return compare(name1[0], name2[0]);
            }
          },
        );
        if (!env.env.BROWSERSLIST_DISABLE_CACHE) {
          cache[cacheKey] = result;
        }
        return result;
      }
      browserslist.parse = function (queries, opts) {
        opts = prepareOpts(opts);
        queries = prepareQueries(queries, opts);
        checkQueries(queries);
        return parse(QUERIES, queries);
      };
      browserslist.cache = {};
      browserslist.data = {};
      browserslist.usage = { global: {}, custom: null };
      browserslist.defaults = [
        "> 0.5%",
        "last 2 versions",
        "Firefox ESR",
        "not dead",
      ];
      browserslist.aliases = {
        fx: "firefox",
        ff: "firefox",
        ios: "ios_saf",
        explorer: "ie",
        blackberry: "bb",
        explorermobile: "ie_mob",
        operamini: "op_mini",
        operamobile: "op_mob",
        chromeandroid: "and_chr",
        firefoxandroid: "and_ff",
        ucandroid: "and_uc",
        qqandroid: "and_qq",
      };
      browserslist.desktopNames = {
        and_chr: "chrome",
        and_ff: "firefox",
        ie_mob: "ie",
        android: "chrome",
      };
      browserslist.versionAliases = {};
      browserslist.clearCaches = env.clearCaches;
      browserslist.parseConfig = env.parseConfig;
      browserslist.readConfig = env.readConfig;
      browserslist.findConfig = env.findConfig;
      browserslist.loadConfig = env.loadConfig;
      browserslist.coverage = function (browsers, stats) {
        var data;
        if (typeof stats === "undefined") {
          data = browserslist.usage.global;
        } else if (stats === "my stats") {
          var opts = {};
          opts.path = path.resolve ? path.resolve(".") : ".";
          var customStats = env.getStat(opts);
          if (!customStats) {
            throw new BrowserslistError(
              "Custom usage statistics was not provided",
            );
          }
          data = {};
          for (var browser in customStats) {
            fillUsage(data, browser, customStats[browser]);
          }
        } else if (typeof stats === "string") {
          if (stats.length > 2) {
            stats = stats.toLowerCase();
          } else {
            stats = stats.toUpperCase();
          }
          env.loadCountry(browserslist.usage, stats, browserslist.data);
          data = browserslist.usage[stats];
        } else {
          if ("dataByBrowser" in stats) {
            stats = stats.dataByBrowser;
          }
          data = {};
          for (var name in stats) {
            for (var version in stats[name]) {
              data[name + " " + version] = stats[name][version];
            }
          }
        }
        return browsers.reduce(function (all, i) {
          var usage = data[i];
          if (usage === undefined) {
            usage = data[i.replace(/ \S+$/, " 0")];
          }
          return all + (usage || 0);
        }, 0);
      };
      function nodeQuery(context, node) {
        var matched = browserslist.nodeVersions.filter(function (i) {
          return isVersionsMatch(i, node.version);
        });
        if (matched.length === 0) {
          if (context.ignoreUnknownVersions) {
            return [];
          } else {
            throw new BrowserslistError(
              "Unknown version " + node.version + " of Node.js",
            );
          }
        }
        return ["node " + matched[matched.length - 1]];
      }
      function sinceQuery(context, node) {
        var year = parseInt(node.year);
        var month = parseInt(node.month || "01") - 1;
        var day = parseInt(node.day || "01");
        return filterByYear(Date.UTC(year, month, day, 0, 0, 0), context);
      }
      function coverQuery(context, node) {
        var coverage = parseFloat(node.coverage);
        var usage = browserslist.usage.global;
        if (node.place) {
          if (node.place.match(/^my\s+stats$/i)) {
            if (!context.customUsage) {
              throw new BrowserslistError(
                "Custom usage statistics was not provided",
              );
            }
            usage = context.customUsage;
          } else {
            var place;
            if (node.place.length === 2) {
              place = node.place.toUpperCase();
            } else {
              place = node.place.toLowerCase();
            }
            env.loadCountry(browserslist.usage, place, browserslist.data);
            usage = browserslist.usage[place];
          }
        }
        var versions = Object.keys(usage).sort(function (a, b) {
          return usage[b] - usage[a];
        });
        var coveraged = 0;
        var result = [];
        var version;
        for (var i = 0; i < versions.length; i++) {
          version = versions[i];
          if (usage[version] === 0) break;
          coveraged += usage[version];
          result.push(version);
          if (coveraged >= coverage) break;
        }
        return result;
      }
      var QUERIES = {
        last_major_versions: {
          matches: ["versions"],
          regexp: /^last\s+(\d+)\s+major\s+versions?$/i,
          select: function (context, node) {
            return Object.keys(agents).reduce(function (selected, name) {
              var data = byName(name, context);
              if (!data) return selected;
              var list = getMajorVersions(data.released, node.versions);
              list = list.map(nameMapper(data.name));
              list = filterJumps(list, data.name, node.versions, context);
              return selected.concat(list);
            }, []);
          },
        },
        last_versions: {
          matches: ["versions"],
          regexp: /^last\s+(\d+)\s+versions?$/i,
          select: function (context, node) {
            return Object.keys(agents).reduce(function (selected, name) {
              var data = byName(name, context);
              if (!data) return selected;
              var list = data.released.slice(-node.versions);
              list = list.map(nameMapper(data.name));
              list = filterJumps(list, data.name, node.versions, context);
              return selected.concat(list);
            }, []);
          },
        },
        last_electron_major_versions: {
          matches: ["versions"],
          regexp: /^last\s+(\d+)\s+electron\s+major\s+versions?$/i,
          select: function (context, node) {
            var validVersions = getMajorVersions(
              Object.keys(e2c),
              node.versions,
            );
            return validVersions.map(function (i) {
              return "chrome " + e2c[i];
            });
          },
        },
        last_node_major_versions: {
          matches: ["versions"],
          regexp: /^last\s+(\d+)\s+node\s+major\s+versions?$/i,
          select: function (context, node) {
            return getMajorVersions(
              browserslist.nodeVersions,
              node.versions,
            ).map(function (version) {
              return "node " + version;
            });
          },
        },
        last_browser_major_versions: {
          matches: ["versions", "browser"],
          regexp: /^last\s+(\d+)\s+(\w+)\s+major\s+versions?$/i,
          select: function (context, node) {
            var data = checkName(node.browser, context);
            var validVersions = getMajorVersions(data.released, node.versions);
            var list = validVersions.map(nameMapper(data.name));
            list = filterJumps(list, data.name, node.versions, context);
            return list;
          },
        },
        last_electron_versions: {
          matches: ["versions"],
          regexp: /^last\s+(\d+)\s+electron\s+versions?$/i,
          select: function (context, node) {
            return Object.keys(e2c)
              .slice(-node.versions)
              .map(function (i) {
                return "chrome " + e2c[i];
              });
          },
        },
        last_node_versions: {
          matches: ["versions"],
          regexp: /^last\s+(\d+)\s+node\s+versions?$/i,
          select: function (context, node) {
            return browserslist.nodeVersions
              .slice(-node.versions)
              .map(function (version) {
                return "node " + version;
              });
          },
        },
        last_browser_versions: {
          matches: ["versions", "browser"],
          regexp: /^last\s+(\d+)\s+(\w+)\s+versions?$/i,
          select: function (context, node) {
            var data = checkName(node.browser, context);
            var list = data.released
              .slice(-node.versions)
              .map(nameMapper(data.name));
            list = filterJumps(list, data.name, node.versions, context);
            return list;
          },
        },
        unreleased_versions: {
          matches: [],
          regexp: /^unreleased\s+versions$/i,
          select: function (context) {
            return Object.keys(agents).reduce(function (selected, name) {
              var data = byName(name, context);
              if (!data) return selected;
              var list = data.versions.filter(function (v) {
                return data.released.indexOf(v) === -1;
              });
              list = list.map(nameMapper(data.name));
              return selected.concat(list);
            }, []);
          },
        },
        unreleased_electron_versions: {
          matches: [],
          regexp: /^unreleased\s+electron\s+versions?$/i,
          select: function () {
            return [];
          },
        },
        unreleased_browser_versions: {
          matches: ["browser"],
          regexp: /^unreleased\s+(\w+)\s+versions?$/i,
          select: function (context, node) {
            var data = checkName(node.browser, context);
            return data.versions
              .filter(function (v) {
                return data.released.indexOf(v) === -1;
              })
              .map(nameMapper(data.name));
          },
        },
        last_years: {
          matches: ["years"],
          regexp: /^last\s+(\d*.?\d+)\s+years?$/i,
          select: function (context, node) {
            return filterByYear(Date.now() - YEAR * node.years, context);
          },
        },
        since_y: {
          matches: ["year"],
          regexp: /^since (\d+)$/i,
          select: sinceQuery,
        },
        since_y_m: {
          matches: ["year", "month"],
          regexp: /^since (\d+)-(\d+)$/i,
          select: sinceQuery,
        },
        since_y_m_d: {
          matches: ["year", "month", "day"],
          regexp: /^since (\d+)-(\d+)-(\d+)$/i,
          select: sinceQuery,
        },
        popularity: {
          matches: ["sign", "popularity"],
          regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%$/,
          select: function (context, node) {
            var popularity = parseFloat(node.popularity);
            var usage = browserslist.usage.global;
            return Object.keys(usage).reduce(function (result, version) {
              if (node.sign === ">") {
                if (usage[version] > popularity) {
                  result.push(version);
                }
              } else if (node.sign === "<") {
                if (usage[version] < popularity) {
                  result.push(version);
                }
              } else if (node.sign === "<=") {
                if (usage[version] <= popularity) {
                  result.push(version);
                }
              } else if (usage[version] >= popularity) {
                result.push(version);
              }
              return result;
            }, []);
          },
        },
        popularity_in_my_stats: {
          matches: ["sign", "popularity"],
          regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+my\s+stats$/,
          select: function (context, node) {
            var popularity = parseFloat(node.popularity);
            if (!context.customUsage) {
              throw new BrowserslistError(
                "Custom usage statistics was not provided",
              );
            }
            var usage = context.customUsage;
            return Object.keys(usage).reduce(function (result, version) {
              var percentage = usage[version];
              if (percentage == null) {
                return result;
              }
              if (node.sign === ">") {
                if (percentage > popularity) {
                  result.push(version);
                }
              } else if (node.sign === "<") {
                if (percentage < popularity) {
                  result.push(version);
                }
              } else if (node.sign === "<=") {
                if (percentage <= popularity) {
                  result.push(version);
                }
              } else if (percentage >= popularity) {
                result.push(version);
              }
              return result;
            }, []);
          },
        },
        popularity_in_config_stats: {
          matches: ["sign", "popularity", "config"],
          regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+(\S+)\s+stats$/,
          select: function (context, node) {
            var popularity = parseFloat(node.popularity);
            var stats = env.loadStat(context, node.config, browserslist.data);
            if (stats) {
              context.customUsage = {};
              for (var browser in stats) {
                fillUsage(context.customUsage, browser, stats[browser]);
              }
            }
            if (!context.customUsage) {
              throw new BrowserslistError(
                "Custom usage statistics was not provided",
              );
            }
            var usage = context.customUsage;
            return Object.keys(usage).reduce(function (result, version) {
              var percentage = usage[version];
              if (percentage == null) {
                return result;
              }
              if (node.sign === ">") {
                if (percentage > popularity) {
                  result.push(version);
                }
              } else if (node.sign === "<") {
                if (percentage < popularity) {
                  result.push(version);
                }
              } else if (node.sign === "<=") {
                if (percentage <= popularity) {
                  result.push(version);
                }
              } else if (percentage >= popularity) {
                result.push(version);
              }
              return result;
            }, []);
          },
        },
        popularity_in_place: {
          matches: ["sign", "popularity", "place"],
          regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+((alt-)?\w\w)$/,
          select: function (context, node) {
            var popularity = parseFloat(node.popularity);
            var place = node.place;
            if (place.length === 2) {
              place = place.toUpperCase();
            } else {
              place = place.toLowerCase();
            }
            env.loadCountry(browserslist.usage, place, browserslist.data);
            var usage = browserslist.usage[place];
            return Object.keys(usage).reduce(function (result, version) {
              var percentage = usage[version];
              if (percentage == null) {
                return result;
              }
              if (node.sign === ">") {
                if (percentage > popularity) {
                  result.push(version);
                }
              } else if (node.sign === "<") {
                if (percentage < popularity) {
                  result.push(version);
                }
              } else if (node.sign === "<=") {
                if (percentage <= popularity) {
                  result.push(version);
                }
              } else if (percentage >= popularity) {
                result.push(version);
              }
              return result;
            }, []);
          },
        },
        cover: {
          matches: ["coverage"],
          regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%$/i,
          select: coverQuery,
        },
        cover_in: {
          matches: ["coverage", "place"],
          regexp:
            /^cover\s+(\d+|\d+\.\d+|\.\d+)%\s+in\s+(my\s+stats|(alt-)?\w\w)$/i,
          select: coverQuery,
        },
        supports: {
          matches: ["supportType", "feature"],
          regexp: /^(?:(fully|partially)\s+)?supports\s+([\w-]+)$/,
          select: function (context, node) {
            env.loadFeature(browserslist.cache, node.feature);
            var withPartial = node.supportType !== "fully";
            var features = browserslist.cache[node.feature];
            var result = [];
            for (var name in features) {
              var data = byName(name, context);
              var iMax = data.released.length - 1;
              while (iMax >= 0) {
                if (data.released[iMax] in features[name]) break;
                iMax--;
              }
              var checkDesktop =
                context.mobileToDesktop &&
                name in browserslist.desktopNames &&
                isSupported(features[name][data.released[iMax]], withPartial);
              data.versions.forEach(function (version) {
                var flags = features[name][version];
                if (flags === undefined && checkDesktop) {
                  flags = features[browserslist.desktopNames[name]][version];
                }
                if (isSupported(flags, withPartial)) {
                  result.push(name + " " + version);
                }
              });
            }
            return result;
          },
        },
        electron_range: {
          matches: ["from", "to"],
          regexp: /^electron\s+([\d.]+)\s*-\s*([\d.]+)$/i,
          select: function (context, node) {
            var fromToUse = normalizeElectron(node.from);
            var toToUse = normalizeElectron(node.to);
            var from = parseFloat(node.from);
            var to = parseFloat(node.to);
            if (!e2c[fromToUse]) {
              throw new BrowserslistError(
                "Unknown version " + from + " of electron",
              );
            }
            if (!e2c[toToUse]) {
              throw new BrowserslistError(
                "Unknown version " + to + " of electron",
              );
            }
            return Object.keys(e2c)
              .filter(function (i) {
                var parsed = parseFloat(i);
                return parsed >= from && parsed <= to;
              })
              .map(function (i) {
                return "chrome " + e2c[i];
              });
          },
        },
        node_range: {
          matches: ["from", "to"],
          regexp: /^node\s+([\d.]+)\s*-\s*([\d.]+)$/i,
          select: function (context, node) {
            return browserslist.nodeVersions
              .filter(semverFilterLoose(">=", node.from))
              .filter(semverFilterLoose("<=", node.to))
              .map(function (v) {
                return "node " + v;
              });
          },
        },
        browser_range: {
          matches: ["browser", "from", "to"],
          regexp: /^(\w+)\s+([\d.]+)\s*-\s*([\d.]+)$/i,
          select: function (context, node) {
            var data = checkName(node.browser, context);
            var from = parseFloat(
              normalizeVersion(data, node.from) || node.from,
            );
            var to = parseFloat(normalizeVersion(data, node.to) || node.to);
            function filter(v) {
              var parsed = parseFloat(v);
              return parsed >= from && parsed <= to;
            }
            return data.released.filter(filter).map(nameMapper(data.name));
          },
        },
        electron_ray: {
          matches: ["sign", "version"],
          regexp: /^electron\s*(>=?|<=?)\s*([\d.]+)$/i,
          select: function (context, node) {
            var versionToUse = normalizeElectron(node.version);
            return Object.keys(e2c)
              .filter(generateFilter(node.sign, versionToUse))
              .map(function (i) {
                return "chrome " + e2c[i];
              });
          },
        },
        node_ray: {
          matches: ["sign", "version"],
          regexp: /^node\s*(>=?|<=?)\s*([\d.]+)$/i,
          select: function (context, node) {
            return browserslist.nodeVersions
              .filter(generateSemverFilter(node.sign, node.version))
              .map(function (v) {
                return "node " + v;
              });
          },
        },
        browser_ray: {
          matches: ["browser", "sign", "version"],
          regexp: /^(\w+)\s*(>=?|<=?)\s*([\d.]+)$/,
          select: function (context, node) {
            var version = node.version;
            var data = checkName(node.browser, context);
            var alias = browserslist.versionAliases[data.name][version];
            if (alias) version = alias;
            return data.released
              .filter(generateFilter(node.sign, version))
              .map(function (v) {
                return data.name + " " + v;
              });
          },
        },
        firefox_esr: {
          matches: [],
          regexp: /^(firefox|ff|fx)\s+esr$/i,
          select: function () {
            return ["firefox 115", "firefox 128"];
          },
        },
        opera_mini_all: {
          matches: [],
          regexp: /(operamini|op_mini)\s+all/i,
          select: function () {
            return ["op_mini all"];
          },
        },
        electron_version: {
          matches: ["version"],
          regexp: /^electron\s+([\d.]+)$/i,
          select: function (context, node) {
            var versionToUse = normalizeElectron(node.version);
            var chrome = e2c[versionToUse];
            if (!chrome) {
              throw new BrowserslistError(
                "Unknown version " + node.version + " of electron",
              );
            }
            return ["chrome " + chrome];
          },
        },
        node_major_version: {
          matches: ["version"],
          regexp: /^node\s+(\d+)$/i,
          select: nodeQuery,
        },
        node_minor_version: {
          matches: ["version"],
          regexp: /^node\s+(\d+\.\d+)$/i,
          select: nodeQuery,
        },
        node_patch_version: {
          matches: ["version"],
          regexp: /^node\s+(\d+\.\d+\.\d+)$/i,
          select: nodeQuery,
        },
        current_node: {
          matches: [],
          regexp: /^current\s+node$/i,
          select: function (context) {
            return [env.currentNode(resolve, context)];
          },
        },
        maintained_node: {
          matches: [],
          regexp: /^maintained\s+node\s+versions$/i,
          select: function (context) {
            var now = Date.now();
            var queries = Object.keys(jsEOL)
              .filter(function (key) {
                return (
                  now < Date.parse(jsEOL[key].end) &&
                  now > Date.parse(jsEOL[key].start) &&
                  isEolReleased(key)
                );
              })
              .map(function (key) {
                return "node " + key.slice(1);
              });
            return resolve(queries, context);
          },
        },
        phantomjs_1_9: {
          matches: [],
          regexp: /^phantomjs\s+1.9$/i,
          select: function () {
            return ["safari 5"];
          },
        },
        phantomjs_2_1: {
          matches: [],
          regexp: /^phantomjs\s+2.1$/i,
          select: function () {
            return ["safari 6"];
          },
        },
        browser_version: {
          matches: ["browser", "version"],
          regexp: /^(\w+)\s+(tp|[\d.]+)$/i,
          select: function (context, node) {
            var version = node.version;
            if (/^tp$/i.test(version)) version = "TP";
            var data = checkName(node.browser, context);
            var alias = normalizeVersion(data, version);
            if (alias) {
              version = alias;
            } else {
              if (version.indexOf(".") === -1) {
                alias = version + ".0";
              } else {
                alias = version.replace(/\.0$/, "");
              }
              alias = normalizeVersion(data, alias);
              if (alias) {
                version = alias;
              } else if (context.ignoreUnknownVersions) {
                return [];
              } else {
                throw new BrowserslistError(
                  "Unknown version " + version + " of " + node.browser,
                );
              }
            }
            return [data.name + " " + version];
          },
        },
        browserslist_config: {
          matches: [],
          regexp: /^browserslist config$/i,
          select: function (context) {
            return browserslist(undefined, context);
          },
        },
        extends: {
          matches: ["config"],
          regexp: /^extends (.+)$/i,
          select: function (context, node) {
            return resolve(env.loadQueries(context, node.config), context);
          },
        },
        defaults: {
          matches: [],
          regexp: /^defaults$/i,
          select: function (context) {
            return resolve(browserslist.defaults, context);
          },
        },
        dead: {
          matches: [],
          regexp: /^dead$/i,
          select: function (context) {
            var dead = [
              "Baidu >= 0",
              "ie <= 11",
              "ie_mob <= 11",
              "bb <= 10",
              "op_mob <= 12.1",
              "samsung 4",
            ];
            return resolve(dead, context);
          },
        },
        unknown: {
          matches: [],
          regexp: /^(\w+)$/i,
          select: function (context, node) {
            if (byName(node.query, context)) {
              throw new BrowserslistError(
                "Specify versions in Browserslist query for browser " +
                  node.query,
              );
            } else {
              throw unknownQuery(node.query);
            }
          },
        },
      };
      (function () {
        for (var name in agents) {
          var browser = agents[name];
          browserslist.data[name] = {
            name,
            versions: normalize(agents[name].versions),
            released: normalize(agents[name].versions.slice(0, -3)),
            releaseDate: agents[name].release_date,
          };
          fillUsage(browserslist.usage.global, name, browser.usage_global);
          browserslist.versionAliases[name] = {};
          for (var i = 0; i < browser.versions.length; i++) {
            var full = browser.versions[i];
            if (!full) continue;
            if (full.indexOf("-") !== -1) {
              var interval = full.split("-");
              for (var j = 0; j < interval.length; j++) {
                browserslist.versionAliases[name][interval[j]] = full;
              }
            }
          }
        }
        browserslist.nodeVersions = jsReleases.map(function (release) {
          return release.version;
        });
      })();
      module.exports = browserslist;
    },
    486: (module, __unused_webpack_exports, __nccwpck_require__) => {
      var feature = __nccwpck_require__(1711)["default"];
      var region = __nccwpck_require__(7225)["default"];
      var path = __nccwpck_require__(1017);
      var fs = __nccwpck_require__(7147);
      var BrowserslistError = __nccwpck_require__(2498);
      var IS_SECTION = /^\s*\[(.+)]\s*$/;
      var CONFIG_PATTERN = /^browserslist-config-/;
      var SCOPED_CONFIG__PATTERN =
        /@[^/]+(?:\/[^/]+)?\/browserslist-config(?:-|$|\/)/;
      var TIME_TO_UPDATE_CANIUSE = 6 * 30 * 24 * 60 * 60 * 1e3;
      var FORMAT =
        "Browserslist config should be a string or an array " +
        "of strings with browser queries";
      var dataTimeChecked = false;
      var filenessCache = {};
      var configCache = {};
      function checkExtend(name) {
        var use = " Use `dangerousExtend` option to disable.";
        if (!CONFIG_PATTERN.test(name) && !SCOPED_CONFIG__PATTERN.test(name)) {
          throw new BrowserslistError(
            "Browserslist config needs `browserslist-config-` prefix. " + use,
          );
        }
        if (name.replace(/^@[^/]+\//, "").indexOf(".") !== -1) {
          throw new BrowserslistError(
            "`.` not allowed in Browserslist config name. " + use,
          );
        }
        if (name.indexOf("node_modules") !== -1) {
          throw new BrowserslistError(
            "`node_modules` not allowed in Browserslist config." + use,
          );
        }
      }
      function isFile(file) {
        if (file in filenessCache) {
          return filenessCache[file];
        }
        var result = fs.existsSync(file) && fs.statSync(file).isFile();
        if (!process.env.BROWSERSLIST_DISABLE_CACHE) {
          filenessCache[file] = result;
        }
        return result;
      }
      function eachParent(file, callback) {
        var dir = isFile(file) ? path.dirname(file) : file;
        var loc = path.resolve(dir);
        do {
          if (!pathInRoot(loc)) break;
          var result = callback(loc);
          if (typeof result !== "undefined") return result;
        } while (loc !== (loc = path.dirname(loc)));
        return undefined;
      }
      function pathInRoot(p) {
        if (!process.env.BROWSERSLIST_ROOT_PATH) return true;
        var rootPath = path.resolve(process.env.BROWSERSLIST_ROOT_PATH);
        if (path.relative(rootPath, p).substring(0, 2) === "..") {
          return false;
        }
        return true;
      }
      function check(section) {
        if (Array.isArray(section)) {
          for (var i = 0; i < section.length; i++) {
            if (typeof section[i] !== "string") {
              throw new BrowserslistError(FORMAT);
            }
          }
        } else if (typeof section !== "string") {
          throw new BrowserslistError(FORMAT);
        }
      }
      function pickEnv(config, opts) {
        if (typeof config !== "object") return config;
        var name;
        if (typeof opts.env === "string") {
          name = opts.env;
        } else if (process.env.BROWSERSLIST_ENV) {
          name = process.env.BROWSERSLIST_ENV;
        } else if (process.env.NODE_ENV) {
          name = process.env.NODE_ENV;
        } else {
          name = "production";
        }
        if (opts.throwOnMissing) {
          if (name && name !== "defaults" && !config[name]) {
            throw new BrowserslistError(
              "Missing config for Browserslist environment `" + name + "`",
            );
          }
        }
        return config[name] || config.defaults;
      }
      function parsePackage(file) {
        var config = JSON.parse(
          fs
            .readFileSync(file)
            .toString()
            .replace(/^\uFEFF/m, ""),
        );
        if (config.browserlist && !config.browserslist) {
          throw new BrowserslistError(
            "`browserlist` key instead of `browserslist` in " + file,
          );
        }
        var list = config.browserslist;
        if (Array.isArray(list) || typeof list === "string") {
          list = { defaults: list };
        }
        for (var i in list) {
          check(list[i]);
        }
        return list;
      }
      function latestReleaseTime(agents) {
        var latest = 0;
        for (var name in agents) {
          var dates = agents[name].releaseDate || {};
          for (var key in dates) {
            if (latest < dates[key]) {
              latest = dates[key];
            }
          }
        }
        return latest * 1e3;
      }
      function normalizeStats(data, stats) {
        if (!data) {
          data = {};
        }
        if (stats && "dataByBrowser" in stats) {
          stats = stats.dataByBrowser;
        }
        if (typeof stats !== "object") return undefined;
        var normalized = {};
        for (var i in stats) {
          var versions = Object.keys(stats[i]);
          if (
            versions.length === 1 &&
            data[i] &&
            data[i].versions.length === 1
          ) {
            var normal = data[i].versions[0];
            normalized[i] = {};
            normalized[i][normal] = stats[i][versions[0]];
          } else {
            normalized[i] = stats[i];
          }
        }
        return normalized;
      }
      function normalizeUsageData(usageData, data) {
        for (var browser in usageData) {
          var browserUsage = usageData[browser];
          if ("0" in browserUsage) {
            var versions = data[browser].versions;
            browserUsage[versions[versions.length - 1]] = browserUsage[0];
            delete browserUsage[0];
          }
        }
      }
      module.exports = {
        loadQueries: function loadQueries(ctx, name) {
          if (
            !ctx.dangerousExtend &&
            !process.env.BROWSERSLIST_DANGEROUS_EXTEND
          ) {
            checkExtend(name);
          }
          var queries = require(
            __nccwpck_require__(8440).resolve(name, { paths: [".", ctx.path] }),
          );
          if (queries) {
            if (Array.isArray(queries)) {
              return queries;
            } else if (typeof queries === "object") {
              if (!queries.defaults) queries.defaults = [];
              return pickEnv(queries, ctx, name);
            }
          }
          throw new BrowserslistError(
            "`" +
              name +
              "` config exports not an array of queries" +
              " or an object of envs",
          );
        },
        loadStat: function loadStat(ctx, name, data) {
          if (
            !ctx.dangerousExtend &&
            !process.env.BROWSERSLIST_DANGEROUS_EXTEND
          ) {
            checkExtend(name);
          }
          var stats = require(
            __nccwpck_require__(8440).resolve(
              path.join(name, "browserslist-stats.json"),
              { paths: ["."] },
            ),
          );
          return normalizeStats(data, stats);
        },
        getStat: function getStat(opts, data) {
          var stats;
          if (opts.stats) {
            stats = opts.stats;
          } else if (process.env.BROWSERSLIST_STATS) {
            stats = process.env.BROWSERSLIST_STATS;
          } else if (opts.path && path.resolve && fs.existsSync) {
            stats = eachParent(opts.path, function (dir) {
              var file = path.join(dir, "browserslist-stats.json");
              return isFile(file) ? file : undefined;
            });
          }
          if (typeof stats === "string") {
            try {
              stats = JSON.parse(fs.readFileSync(stats));
            } catch (e) {
              throw new BrowserslistError("Can't read " + stats);
            }
          }
          return normalizeStats(data, stats);
        },
        loadConfig: function loadConfig(opts) {
          if (process.env.BROWSERSLIST) {
            return process.env.BROWSERSLIST;
          } else if (opts.config || process.env.BROWSERSLIST_CONFIG) {
            var file = opts.config || process.env.BROWSERSLIST_CONFIG;
            if (path.basename(file) === "package.json") {
              return pickEnv(parsePackage(file), opts);
            } else {
              return pickEnv(module.exports.readConfig(file), opts);
            }
          } else if (opts.path) {
            return pickEnv(module.exports.findConfig(opts.path), opts);
          } else {
            return undefined;
          }
        },
        loadCountry: function loadCountry(usage, country, data) {
          var code = country.replace(/[^\w-]/g, "");
          if (!usage[code]) {
            var compressed;
            try {
              compressed = require("caniuse-lite/data/regions/" + code + ".js");
            } catch (e) {
              throw new BrowserslistError(
                "Unknown region name `" + code + "`.",
              );
            }
            var usageData = region(compressed);
            normalizeUsageData(usageData, data);
            usage[country] = {};
            for (var i in usageData) {
              for (var j in usageData[i]) {
                usage[country][i + " " + j] = usageData[i][j];
              }
            }
          }
        },
        loadFeature: function loadFeature(features, name) {
          name = name.replace(/[^\w-]/g, "");
          if (features[name]) return;
          var compressed;
          try {
            compressed = require("caniuse-lite/data/features/" + name + ".js");
          } catch (e) {
            throw new BrowserslistError("Unknown feature name `" + name + "`.");
          }
          var stats = feature(compressed).stats;
          features[name] = {};
          for (var i in stats) {
            features[name][i] = {};
            for (var j in stats[i]) {
              features[name][i][j] = stats[i][j];
            }
          }
        },
        parseConfig: function parseConfig(string) {
          var result = { defaults: [] };
          var sections = ["defaults"];
          string
            .toString()
            .replace(/#[^\n]*/g, "")
            .split(/\n|,/)
            .map(function (line) {
              return line.trim();
            })
            .filter(function (line) {
              return line !== "";
            })
            .forEach(function (line) {
              if (IS_SECTION.test(line)) {
                sections = line.match(IS_SECTION)[1].trim().split(" ");
                sections.forEach(function (section) {
                  if (result[section]) {
                    throw new BrowserslistError(
                      "Duplicate section " +
                        section +
                        " in Browserslist config",
                    );
                  }
                  result[section] = [];
                });
              } else {
                sections.forEach(function (section) {
                  result[section].push(line);
                });
              }
            });
          return result;
        },
        readConfig: function readConfig(file) {
          if (!isFile(file)) {
            throw new BrowserslistError("Can't read " + file + " config");
          }
          return module.exports.parseConfig(fs.readFileSync(file));
        },
        findConfig: function findConfig(from) {
          from = path.resolve(from);
          var passed = [];
          var resolved = eachParent(from, function (dir) {
            if (dir in configCache) {
              return configCache[dir];
            }
            passed.push(dir);
            var config = path.join(dir, "browserslist");
            var pkg = path.join(dir, "package.json");
            var rc = path.join(dir, ".browserslistrc");
            var pkgBrowserslist;
            if (isFile(pkg)) {
              try {
                pkgBrowserslist = parsePackage(pkg);
              } catch (e) {
                if (e.name === "BrowserslistError") throw e;
                console.warn(
                  "[Browserslist] Could not parse " + pkg + ". Ignoring it.",
                );
              }
            }
            if (isFile(config) && pkgBrowserslist) {
              throw new BrowserslistError(
                dir +
                  " contains both browserslist and package.json with browsers",
              );
            } else if (isFile(rc) && pkgBrowserslist) {
              throw new BrowserslistError(
                dir +
                  " contains both .browserslistrc and package.json with browsers",
              );
            } else if (isFile(config) && isFile(rc)) {
              throw new BrowserslistError(
                dir + " contains both .browserslistrc and browserslist",
              );
            } else if (isFile(config)) {
              return module.exports.readConfig(config);
            } else if (isFile(rc)) {
              return module.exports.readConfig(rc);
            } else {
              return pkgBrowserslist;
            }
          });
          if (!process.env.BROWSERSLIST_DISABLE_CACHE) {
            passed.forEach(function (dir) {
              configCache[dir] = resolved;
            });
          }
          return resolved;
        },
        clearCaches: function clearCaches() {
          dataTimeChecked = false;
          filenessCache = {};
          configCache = {};
          this.cache = {};
        },
        oldDataWarning: function oldDataWarning(agentsObj) {
          if (dataTimeChecked) return;
          dataTimeChecked = true;
          if (process.env.BROWSERSLIST_IGNORE_OLD_DATA) return;
          var latest = latestReleaseTime(agentsObj);
          var halfYearAgo = Date.now() - TIME_TO_UPDATE_CANIUSE;
          if (latest !== 0 && latest < halfYearAgo) {
            console.warn(
              "Browserslist: caniuse-lite is outdated. Please run:\n" +
                "  npx update-browserslist-db@latest\n" +
                "  Why you should do it regularly: " +
                "https://github.com/browserslist/update-db#readme",
            );
          }
        },
        currentNode: function currentNode() {
          return "node " + process.versions.node;
        },
        env: process.env,
      };
    },
    8046: (module) => {
      var AND_REGEXP = /^\s+and\s+(.*)/i;
      var OR_REGEXP = /^(?:,\s*|\s+or\s+)(.*)/i;
      function flatten(array) {
        if (!Array.isArray(array)) return [array];
        return array.reduce(function (a, b) {
          return a.concat(flatten(b));
        }, []);
      }
      function find(string, predicate) {
        for (var n = 1, max = string.length; n <= max; n++) {
          var parsed = string.substr(-n, n);
          if (predicate(parsed, n, max)) {
            return string.slice(0, -n);
          }
        }
        return "";
      }
      function matchQuery(all, query) {
        var node = { query };
        if (query.indexOf("not ") === 0) {
          node.not = true;
          query = query.slice(4);
        }
        for (var name in all) {
          var type = all[name];
          var match = query.match(type.regexp);
          if (match) {
            node.type = name;
            for (var i = 0; i < type.matches.length; i++) {
              node[type.matches[i]] = match[i + 1];
            }
            return node;
          }
        }
        node.type = "unknown";
        return node;
      }
      function matchBlock(all, string, qs) {
        var node;
        return find(string, function (parsed, n, max) {
          if (AND_REGEXP.test(parsed)) {
            node = matchQuery(all, parsed.match(AND_REGEXP)[1]);
            node.compose = "and";
            qs.unshift(node);
            return true;
          } else if (OR_REGEXP.test(parsed)) {
            node = matchQuery(all, parsed.match(OR_REGEXP)[1]);
            node.compose = "or";
            qs.unshift(node);
            return true;
          } else if (n === max) {
            node = matchQuery(all, parsed.trim());
            node.compose = "or";
            qs.unshift(node);
            return true;
          }
          return false;
        });
      }
      module.exports = function parse(all, queries) {
        if (!Array.isArray(queries)) queries = [queries];
        return flatten(
          queries.map(function (block) {
            var qs = [];
            do {
              block = matchBlock(all, block, qs);
            } while (block);
            return qs;
          }),
        );
      };
    },
    6719: (module) => {
      module.exports = {
        "0.20": "39",
        0.21: "41",
        0.22: "41",
        0.23: "41",
        0.24: "41",
        0.25: "42",
        0.26: "42",
        0.27: "43",
        0.28: "43",
        0.29: "43",
        "0.30": "44",
        0.31: "45",
        0.32: "45",
        0.33: "45",
        0.34: "45",
        0.35: "45",
        0.36: "47",
        0.37: "49",
        "1.0": "49",
        1.1: "50",
        1.2: "51",
        1.3: "52",
        1.4: "53",
        1.5: "54",
        1.6: "56",
        1.7: "58",
        1.8: "59",
        "2.0": "61",
        2.1: "61",
        "3.0": "66",
        3.1: "66",
        "4.0": "69",
        4.1: "69",
        4.2: "69",
        "5.0": "73",
        "6.0": "76",
        6.1: "76",
        "7.0": "78",
        7.1: "78",
        7.2: "78",
        7.3: "78",
        "8.0": "80",
        8.1: "80",
        8.2: "80",
        8.3: "80",
        8.4: "80",
        8.5: "80",
        "9.0": "83",
        9.1: "83",
        9.2: "83",
        9.3: "83",
        9.4: "83",
        "10.0": "85",
        10.1: "85",
        10.2: "85",
        10.3: "85",
        10.4: "85",
        "11.0": "87",
        11.1: "87",
        11.2: "87",
        11.3: "87",
        11.4: "87",
        11.5: "87",
        "12.0": "89",
        12.1: "89",
        12.2: "89",
        "13.0": "91",
        13.1: "91",
        13.2: "91",
        13.3: "91",
        13.4: "91",
        13.5: "91",
        13.6: "91",
        "14.0": "93",
        14.1: "93",
        14.2: "93",
        "15.0": "94",
        15.1: "94",
        15.2: "94",
        15.3: "94",
        15.4: "94",
        15.5: "94",
        "16.0": "96",
        16.1: "96",
        16.2: "96",
        "17.0": "98",
        17.1: "98",
        17.2: "98",
        17.3: "98",
        17.4: "98",
        "18.0": "100",
        18.1: "100",
        18.2: "100",
        18.3: "100",
        "19.0": "102",
        19.1: "102",
        "20.0": "104",
        20.1: "104",
        20.2: "104",
        20.3: "104",
        "21.0": "106",
        21.1: "106",
        21.2: "106",
        21.3: "106",
        21.4: "106",
        "22.0": "108",
        22.1: "108",
        22.2: "108",
        22.3: "108",
        "23.0": "110",
        23.1: "110",
        23.2: "110",
        23.3: "110",
        "24.0": "112",
        24.1: "112",
        24.2: "112",
        24.3: "112",
        24.4: "112",
        24.5: "112",
        24.6: "112",
        24.7: "112",
        24.8: "112",
        "25.0": "114",
        25.1: "114",
        25.2: "114",
        25.3: "114",
        25.4: "114",
        25.5: "114",
        25.6: "114",
        25.7: "114",
        25.8: "114",
        25.9: "114",
        "26.0": "116",
        26.1: "116",
        26.2: "116",
        26.3: "116",
        26.4: "116",
        26.5: "116",
        26.6: "116",
        "27.0": "118",
        27.1: "118",
        27.2: "118",
        27.3: "118",
        "28.0": "120",
        28.1: "120",
        28.2: "120",
        28.3: "120",
        "29.0": "122",
        29.1: "122",
        29.2: "122",
        29.3: "122",
        29.4: "122",
        "30.0": "124",
        30.1: "124",
        30.2: "124",
        30.3: "124",
        "31.0": "126",
        31.1: "126",
        31.2: "126",
        31.3: "126",
        "32.0": "128",
      };
    },
    4251: (module) => {
      "use strict";
      module.exports = {
        wrap: wrapRange,
        limit: limitRange,
        validate: validateRange,
        test: testRange,
        curry,
        name,
      };
      function wrapRange(min, max, value) {
        var maxLessMin = max - min;
        return ((((value - min) % maxLessMin) + maxLessMin) % maxLessMin) + min;
      }
      function limitRange(min, max, value) {
        return Math.max(min, Math.min(max, value));
      }
      function validateRange(min, max, value, minExclusive, maxExclusive) {
        if (!testRange(min, max, value, minExclusive, maxExclusive)) {
          throw new Error(
            value + " is outside of range [" + min + "," + max + ")",
          );
        }
        return value;
      }
      function testRange(min, max, value, minExclusive, maxExclusive) {
        return !(
          value < min ||
          value > max ||
          (maxExclusive && value === max) ||
          (minExclusive && value === min)
        );
      }
      function name(min, max, minExcl, maxExcl) {
        return (minExcl ? "(" : "[") + min + "," + max + (maxExcl ? ")" : "]");
      }
      function curry(min, max, minExclusive, maxExclusive) {
        var boundNameFn = name.bind(null, min, max, minExclusive, maxExclusive);
        return {
          wrap: wrapRange.bind(null, min, max),
          limit: limitRange.bind(null, min, max),
          validate: function (value) {
            return validateRange(min, max, value, minExclusive, maxExclusive);
          },
          test: function (value) {
            return testRange(min, max, value, minExclusive, maxExclusive);
          },
          toString: boundNameFn,
          name: boundNameFn,
        };
      }
    },
    7023: (module, __unused_webpack_exports, __nccwpck_require__) => {
      let argv = process.argv || [],
        env = process.env;
      let isColorSupported =
        !("NO_COLOR" in env || argv.includes("--no-color")) &&
        ("FORCE_COLOR" in env ||
          argv.includes("--color") ||
          process.platform === "win32" ||
          (require != null &&
            __nccwpck_require__(6224).isatty(1) &&
            env.TERM !== "dumb") ||
          "CI" in env);
      let formatter =
        (open, close, replace = open) =>
        (input) => {
          let string = "" + input;
          let index = string.indexOf(close, open.length);
          return ~index
            ? open + replaceClose(string, close, replace, index) + close
            : open + string + close;
        };
      let replaceClose = (string, close, replace, index) => {
        let result = "";
        let cursor = 0;
        do {
          result += string.substring(cursor, index) + replace;
          cursor = index + close.length;
          index = string.indexOf(close, cursor);
        } while (~index);
        return result + string.substring(cursor);
      };
      let createColors = (enabled = isColorSupported) => {
        let init = enabled ? formatter : () => String;
        return {
          isColorSupported: enabled,
          reset: init("[0m", "[0m"),
          bold: init("[1m", "[22m", "[22m[1m"),
          dim: init("[2m", "[22m", "[22m[2m"),
          italic: init("[3m", "[23m"),
          underline: init("[4m", "[24m"),
          inverse: init("[7m", "[27m"),
          hidden: init("[8m", "[28m"),
          strikethrough: init("[9m", "[29m"),
          black: init("[30m", "[39m"),
          red: init("[31m", "[39m"),
          green: init("[32m", "[39m"),
          yellow: init("[33m", "[39m"),
          blue: init("[34m", "[39m"),
          magenta: init("[35m", "[39m"),
          cyan: init("[36m", "[39m"),
          white: init("[37m", "[39m"),
          gray: init("[90m", "[39m"),
          bgBlack: init("[40m", "[49m"),
          bgRed: init("[41m", "[49m"),
          bgGreen: init("[42m", "[49m"),
          bgYellow: init("[43m", "[49m"),
          bgBlue: init("[44m", "[49m"),
          bgMagenta: init("[45m", "[49m"),
          bgCyan: init("[46m", "[49m"),
          bgWhite: init("[47m", "[49m"),
        };
      };
      module.exports = createColors();
      module.exports.createColors = createColors;
    },
    9285: (module, __unused_webpack_exports, __nccwpck_require__) => {
      var parse = __nccwpck_require__(5920);
      var walk = __nccwpck_require__(9987);
      var stringify = __nccwpck_require__(7952);
      function ValueParser(value) {
        if (this instanceof ValueParser) {
          this.nodes = parse(value);
          return this;
        }
        return new ValueParser(value);
      }
      ValueParser.prototype.toString = function () {
        return Array.isArray(this.nodes) ? stringify(this.nodes) : "";
      };
      ValueParser.prototype.walk = function (cb, bubble) {
        walk(this.nodes, cb, bubble);
        return this;
      };
      ValueParser.unit = __nccwpck_require__(5148);
      ValueParser.walk = walk;
      ValueParser.stringify = stringify;
      module.exports = ValueParser;
    },
    5920: (module) => {
      var openParentheses = "(".charCodeAt(0);
      var closeParentheses = ")".charCodeAt(0);
      var singleQuote = "'".charCodeAt(0);
      var doubleQuote = '"'.charCodeAt(0);
      var backslash = "\\".charCodeAt(0);
      var slash = "/".charCodeAt(0);
      var comma = ",".charCodeAt(0);
      var colon = ":".charCodeAt(0);
      var star = "*".charCodeAt(0);
      var uLower = "u".charCodeAt(0);
      var uUpper = "U".charCodeAt(0);
      var plus = "+".charCodeAt(0);
      var isUnicodeRange = /^[a-f0-9?-]+$/i;
      module.exports = function (input) {
        var tokens = [];
        var value = input;
        var next,
          quote,
          prev,
          token,
          escape,
          escapePos,
          whitespacePos,
          parenthesesOpenPos;
        var pos = 0;
        var code = value.charCodeAt(pos);
        var max = value.length;
        var stack = [{ nodes: tokens }];
        var balanced = 0;
        var parent;
        var name = "";
        var before = "";
        var after = "";
        while (pos < max) {
          if (code <= 32) {
            next = pos;
            do {
              next += 1;
              code = value.charCodeAt(next);
            } while (code <= 32);
            token = value.slice(pos, next);
            prev = tokens[tokens.length - 1];
            if (code === closeParentheses && balanced) {
              after = token;
            } else if (prev && prev.type === "div") {
              prev.after = token;
              prev.sourceEndIndex += token.length;
            } else if (
              code === comma ||
              code === colon ||
              (code === slash &&
                value.charCodeAt(next + 1) !== star &&
                (!parent ||
                  (parent &&
                    parent.type === "function" &&
                    parent.value !== "calc")))
            ) {
              before = token;
            } else {
              tokens.push({
                type: "space",
                sourceIndex: pos,
                sourceEndIndex: next,
                value: token,
              });
            }
            pos = next;
          } else if (code === singleQuote || code === doubleQuote) {
            next = pos;
            quote = code === singleQuote ? "'" : '"';
            token = { type: "string", sourceIndex: pos, quote };
            do {
              escape = false;
              next = value.indexOf(quote, next + 1);
              if (~next) {
                escapePos = next;
                while (value.charCodeAt(escapePos - 1) === backslash) {
                  escapePos -= 1;
                  escape = !escape;
                }
              } else {
                value += quote;
                next = value.length - 1;
                token.unclosed = true;
              }
            } while (escape);
            token.value = value.slice(pos + 1, next);
            token.sourceEndIndex = token.unclosed ? next : next + 1;
            tokens.push(token);
            pos = next + 1;
            code = value.charCodeAt(pos);
          } else if (code === slash && value.charCodeAt(pos + 1) === star) {
            next = value.indexOf("*/", pos);
            token = {
              type: "comment",
              sourceIndex: pos,
              sourceEndIndex: next + 2,
            };
            if (next === -1) {
              token.unclosed = true;
              next = value.length;
              token.sourceEndIndex = next;
            }
            token.value = value.slice(pos + 2, next);
            tokens.push(token);
            pos = next + 2;
            code = value.charCodeAt(pos);
          } else if (
            (code === slash || code === star) &&
            parent &&
            parent.type === "function" &&
            parent.value === "calc"
          ) {
            token = value[pos];
            tokens.push({
              type: "word",
              sourceIndex: pos - before.length,
              sourceEndIndex: pos + token.length,
              value: token,
            });
            pos += 1;
            code = value.charCodeAt(pos);
          } else if (code === slash || code === comma || code === colon) {
            token = value[pos];
            tokens.push({
              type: "div",
              sourceIndex: pos - before.length,
              sourceEndIndex: pos + token.length,
              value: token,
              before,
              after: "",
            });
            before = "";
            pos += 1;
            code = value.charCodeAt(pos);
          } else if (openParentheses === code) {
            next = pos;
            do {
              next += 1;
              code = value.charCodeAt(next);
            } while (code <= 32);
            parenthesesOpenPos = pos;
            token = {
              type: "function",
              sourceIndex: pos - name.length,
              value: name,
              before: value.slice(parenthesesOpenPos + 1, next),
            };
            pos = next;
            if (
              name === "url" &&
              code !== singleQuote &&
              code !== doubleQuote
            ) {
              next -= 1;
              do {
                escape = false;
                next = value.indexOf(")", next + 1);
                if (~next) {
                  escapePos = next;
                  while (value.charCodeAt(escapePos - 1) === backslash) {
                    escapePos -= 1;
                    escape = !escape;
                  }
                } else {
                  value += ")";
                  next = value.length - 1;
                  token.unclosed = true;
                }
              } while (escape);
              whitespacePos = next;
              do {
                whitespacePos -= 1;
                code = value.charCodeAt(whitespacePos);
              } while (code <= 32);
              if (parenthesesOpenPos < whitespacePos) {
                if (pos !== whitespacePos + 1) {
                  token.nodes = [
                    {
                      type: "word",
                      sourceIndex: pos,
                      sourceEndIndex: whitespacePos + 1,
                      value: value.slice(pos, whitespacePos + 1),
                    },
                  ];
                } else {
                  token.nodes = [];
                }
                if (token.unclosed && whitespacePos + 1 !== next) {
                  token.after = "";
                  token.nodes.push({
                    type: "space",
                    sourceIndex: whitespacePos + 1,
                    sourceEndIndex: next,
                    value: value.slice(whitespacePos + 1, next),
                  });
                } else {
                  token.after = value.slice(whitespacePos + 1, next);
                  token.sourceEndIndex = next;
                }
              } else {
                token.after = "";
                token.nodes = [];
              }
              pos = next + 1;
              token.sourceEndIndex = token.unclosed ? next : pos;
              code = value.charCodeAt(pos);
              tokens.push(token);
            } else {
              balanced += 1;
              token.after = "";
              token.sourceEndIndex = pos + 1;
              tokens.push(token);
              stack.push(token);
              tokens = token.nodes = [];
              parent = token;
            }
            name = "";
          } else if (closeParentheses === code && balanced) {
            pos += 1;
            code = value.charCodeAt(pos);
            parent.after = after;
            parent.sourceEndIndex += after.length;
            after = "";
            balanced -= 1;
            stack[stack.length - 1].sourceEndIndex = pos;
            stack.pop();
            parent = stack[balanced];
            tokens = parent.nodes;
          } else {
            next = pos;
            do {
              if (code === backslash) {
                next += 1;
              }
              next += 1;
              code = value.charCodeAt(next);
            } while (
              next < max &&
              !(
                code <= 32 ||
                code === singleQuote ||
                code === doubleQuote ||
                code === comma ||
                code === colon ||
                code === slash ||
                code === openParentheses ||
                (code === star &&
                  parent &&
                  parent.type === "function" &&
                  parent.value === "calc") ||
                (code === slash &&
                  parent.type === "function" &&
                  parent.value === "calc") ||
                (code === closeParentheses && balanced)
              )
            );
            token = value.slice(pos, next);
            if (openParentheses === code) {
              name = token;
            } else if (
              (uLower === token.charCodeAt(0) ||
                uUpper === token.charCodeAt(0)) &&
              plus === token.charCodeAt(1) &&
              isUnicodeRange.test(token.slice(2))
            ) {
              tokens.push({
                type: "unicode-range",
                sourceIndex: pos,
                sourceEndIndex: next,
                value: token,
              });
            } else {
              tokens.push({
                type: "word",
                sourceIndex: pos,
                sourceEndIndex: next,
                value: token,
              });
            }
            pos = next;
          }
        }
        for (pos = stack.length - 1; pos; pos -= 1) {
          stack[pos].unclosed = true;
          stack[pos].sourceEndIndex = value.length;
        }
        return stack[0].nodes;
      };
    },
    7952: (module) => {
      function stringifyNode(node, custom) {
        var type = node.type;
        var value = node.value;
        var buf;
        var customResult;
        if (custom && (customResult = custom(node)) !== undefined) {
          return customResult;
        } else if (type === "word" || type === "space") {
          return value;
        } else if (type === "string") {
          buf = node.quote || "";
          return buf + value + (node.unclosed ? "" : buf);
        } else if (type === "comment") {
          return "/*" + value + (node.unclosed ? "" : "*/");
        } else if (type === "div") {
          return (node.before || "") + value + (node.after || "");
        } else if (Array.isArray(node.nodes)) {
          buf = stringify(node.nodes, custom);
          if (type !== "function") {
            return buf;
          }
          return (
            value +
            "(" +
            (node.before || "") +
            buf +
            (node.after || "") +
            (node.unclosed ? "" : ")")
          );
        }
        return value;
      }
      function stringify(nodes, custom) {
        var result, i;
        if (Array.isArray(nodes)) {
          result = "";
          for (i = nodes.length - 1; ~i; i -= 1) {
            result = stringifyNode(nodes[i], custom) + result;
          }
          return result;
        }
        return stringifyNode(nodes, custom);
      }
      module.exports = stringify;
    },
    5148: (module) => {
      var minus = "-".charCodeAt(0);
      var plus = "+".charCodeAt(0);
      var dot = ".".charCodeAt(0);
      var exp = "e".charCodeAt(0);
      var EXP = "E".charCodeAt(0);
      function likeNumber(value) {
        var code = value.charCodeAt(0);
        var nextCode;
        if (code === plus || code === minus) {
          nextCode = value.charCodeAt(1);
          if (nextCode >= 48 && nextCode <= 57) {
            return true;
          }
          var nextNextCode = value.charCodeAt(2);
          if (nextCode === dot && nextNextCode >= 48 && nextNextCode <= 57) {
            return true;
          }
          return false;
        }
        if (code === dot) {
          nextCode = value.charCodeAt(1);
          if (nextCode >= 48 && nextCode <= 57) {
            return true;
          }
          return false;
        }
        if (code >= 48 && code <= 57) {
          return true;
        }
        return false;
      }
      module.exports = function (value) {
        var pos = 0;
        var length = value.length;
        var code;
        var nextCode;
        var nextNextCode;
        if (length === 0 || !likeNumber(value)) {
          return false;
        }
        code = value.charCodeAt(pos);
        if (code === plus || code === minus) {
          pos++;
        }
        while (pos < length) {
          code = value.charCodeAt(pos);
          if (code < 48 || code > 57) {
            break;
          }
          pos += 1;
        }
        code = value.charCodeAt(pos);
        nextCode = value.charCodeAt(pos + 1);
        if (code === dot && nextCode >= 48 && nextCode <= 57) {
          pos += 2;
          while (pos < length) {
            code = value.charCodeAt(pos);
            if (code < 48 || code > 57) {
              break;
            }
            pos += 1;
          }
        }
        code = value.charCodeAt(pos);
        nextCode = value.charCodeAt(pos + 1);
        nextNextCode = value.charCodeAt(pos + 2);
        if (
          (code === exp || code === EXP) &&
          ((nextCode >= 48 && nextCode <= 57) ||
            ((nextCode === plus || nextCode === minus) &&
              nextNextCode >= 48 &&
              nextNextCode <= 57))
        ) {
          pos += nextCode === plus || nextCode === minus ? 3 : 2;
          while (pos < length) {
            code = value.charCodeAt(pos);
            if (code < 48 || code > 57) {
              break;
            }
            pos += 1;
          }
        }
        return { number: value.slice(0, pos), unit: value.slice(pos) };
      };
    },
    9987: (module) => {
      module.exports = function walk(nodes, cb, bubble) {
        var i, max, node, result;
        for (i = 0, max = nodes.length; i < max; i += 1) {
          node = nodes[i];
          if (!bubble) {
            result = cb(node, i, nodes);
          }
          if (
            result !== false &&
            node.type === "function" &&
            Array.isArray(node.nodes)
          ) {
            walk(node.nodes, cb, bubble);
          }
          if (bubble) {
            cb(node, i, nodes);
          }
        }
      };
    },
    8440: (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = "MODULE_NOT_FOUND";
        throw e;
      }
      webpackEmptyContext.keys = () => [];
      webpackEmptyContext.resolve = webpackEmptyContext;
      webpackEmptyContext.id = 8440;
      module.exports = webpackEmptyContext;
    },
    5591: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/background-clip-text");
    },
    1188: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/background-img-opts");
    },
    7097: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/border-image");
    },
    2861: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/border-radius");
    },
    3098: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/calc");
    },
    354: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-animation");
    },
    9323: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-any-link");
    },
    4773: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-appearance");
    },
    7721: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-autofill");
    },
    3166: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-backdrop-filter");
    },
    6781: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-boxdecorationbreak");
    },
    2194: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-boxshadow");
    },
    9205: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-clip-path");
    },
    8995: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-crisp-edges");
    },
    8786: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-cross-fade");
    },
    3504: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-deviceadaptation");
    },
    7801: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-element-function");
    },
    8944: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-featurequeries.js");
    },
    2416: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-file-selector-button");
    },
    1545: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-filter-function");
    },
    3882: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-filters");
    },
    2571: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-gradients");
    },
    6554: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-grid");
    },
    5197: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-hyphens");
    },
    2237: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-image-set");
    },
    7395: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-logical-props");
    },
    6649: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-masks");
    },
    8181: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-media-resolution");
    },
    3898: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-overscroll-behavior");
    },
    6215: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-placeholder");
    },
    9278: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-placeholder-shown");
    },
    8066: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-print-color-adjust");
    },
    3489: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-read-only-write");
    },
    1949: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-regions");
    },
    4822: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-selection");
    },
    5460: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-shapes");
    },
    1340: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-snappoints");
    },
    8235: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-sticky");
    },
    2807: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-text-align-last");
    },
    4838: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-text-orientation");
    },
    9290: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-text-spacing");
    },
    40: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-transitions");
    },
    7437: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-width-stretch");
    },
    2298: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css-writing-mode");
    },
    6597: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css3-boxsizing");
    },
    2983: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css3-cursors-grab");
    },
    8265: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css3-cursors-newer");
    },
    3247: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/css3-tabsize");
    },
    4618: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/flexbox");
    },
    1328: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/font-feature");
    },
    3944: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/font-kerning");
    },
    7766: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/fullscreen");
    },
    5691: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/intrinsic-width");
    },
    4643: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/mdn-css-backdrop-pseudo-element");
    },
    7856: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/mdn-css-unicode-bidi-isolate");
    },
    9067: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/mdn-css-unicode-bidi-isolate-override");
    },
    6097: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/mdn-css-unicode-bidi-plaintext");
    },
    5934: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/mdn-text-decoration-color");
    },
    3874: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/mdn-text-decoration-line");
    },
    1597: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/mdn-text-decoration-shorthand");
    },
    3480: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/mdn-text-decoration-style");
    },
    7809: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/multicolumn");
    },
    1480: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/object-fit");
    },
    1014: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/pointer");
    },
    134: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/text-decoration");
    },
    5514: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/text-emphasis");
    },
    7806: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/text-overflow");
    },
    744: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/text-size-adjust");
    },
    4602: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/transforms2d");
    },
    2866: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/transforms3d");
    },
    9474: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/data/features/user-select-none");
    },
    3768: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/dist/unpacker/agents");
    },
    1711: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/dist/unpacker/feature");
    },
    7225: (module) => {
      "use strict";
      module.exports = require("caniuse-lite/dist/unpacker/region");
    },
    7147: (module) => {
      "use strict";
      module.exports = require("fs");
    },
    1017: (module) => {
      "use strict";
      module.exports = require("path");
    },
    977: (module) => {
      "use strict";
      module.exports = require("postcss");
    },
    6224: (module) => {
      "use strict";
      module.exports = require("tty");
    },
    6460: function (module, exports) {
      /**
       * @license Fraction.js v4.3.7 31/08/2023
       * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
       *
       * Copyright (c) 2023, Robert Eisele (robert@raw.org)
       * Dual licensed under the MIT or GPL Version 2 licenses.
       **/
      (function (root) {
        "use strict";
        var MAX_CYCLE_LEN = 2e3;
        var P = { s: 1, n: 0, d: 1 };
        function assign(n, s) {
          if (isNaN((n = parseInt(n, 10)))) {
            throw InvalidParameter();
          }
          return n * s;
        }
        function newFraction(n, d) {
          if (d === 0) {
            throw DivisionByZero();
          }
          var f = Object.create(Fraction.prototype);
          f["s"] = n < 0 ? -1 : 1;
          n = n < 0 ? -n : n;
          var a = gcd(n, d);
          f["n"] = n / a;
          f["d"] = d / a;
          return f;
        }
        function factorize(num) {
          var factors = {};
          var n = num;
          var i = 2;
          var s = 4;
          while (s <= n) {
            while (n % i === 0) {
              n /= i;
              factors[i] = (factors[i] || 0) + 1;
            }
            s += 1 + 2 * i++;
          }
          if (n !== num) {
            if (n > 1) factors[n] = (factors[n] || 0) + 1;
          } else {
            factors[num] = (factors[num] || 0) + 1;
          }
          return factors;
        }
        var parse = function (p1, p2) {
          var n = 0,
            d = 1,
            s = 1;
          var v = 0,
            w = 0,
            x = 0,
            y = 1,
            z = 1;
          var A = 0,
            B = 1;
          var C = 1,
            D = 1;
          var N = 1e7;
          var M;
          if (p1 === undefined || p1 === null) {
          } else if (p2 !== undefined) {
            n = p1;
            d = p2;
            s = n * d;
            if (n % 1 !== 0 || d % 1 !== 0) {
              throw NonIntegerParameter();
            }
          } else
            switch (typeof p1) {
              case "object": {
                if ("d" in p1 && "n" in p1) {
                  n = p1["n"];
                  d = p1["d"];
                  if ("s" in p1) n *= p1["s"];
                } else if (0 in p1) {
                  n = p1[0];
                  if (1 in p1) d = p1[1];
                } else {
                  throw InvalidParameter();
                }
                s = n * d;
                break;
              }
              case "number": {
                if (p1 < 0) {
                  s = p1;
                  p1 = -p1;
                }
                if (p1 % 1 === 0) {
                  n = p1;
                } else if (p1 > 0) {
                  if (p1 >= 1) {
                    z = Math.pow(10, Math.floor(1 + Math.log(p1) / Math.LN10));
                    p1 /= z;
                  }
                  while (B <= N && D <= N) {
                    M = (A + C) / (B + D);
                    if (p1 === M) {
                      if (B + D <= N) {
                        n = A + C;
                        d = B + D;
                      } else if (D > B) {
                        n = C;
                        d = D;
                      } else {
                        n = A;
                        d = B;
                      }
                      break;
                    } else {
                      if (p1 > M) {
                        A += C;
                        B += D;
                      } else {
                        C += A;
                        D += B;
                      }
                      if (B > N) {
                        n = C;
                        d = D;
                      } else {
                        n = A;
                        d = B;
                      }
                    }
                  }
                  n *= z;
                } else if (isNaN(p1) || isNaN(p2)) {
                  d = n = NaN;
                }
                break;
              }
              case "string": {
                B = p1.match(/\d+|./g);
                if (B === null) throw InvalidParameter();
                if (B[A] === "-") {
                  s = -1;
                  A++;
                } else if (B[A] === "+") {
                  A++;
                }
                if (B.length === A + 1) {
                  w = assign(B[A++], s);
                } else if (B[A + 1] === "." || B[A] === ".") {
                  if (B[A] !== ".") {
                    v = assign(B[A++], s);
                  }
                  A++;
                  if (
                    A + 1 === B.length ||
                    (B[A + 1] === "(" && B[A + 3] === ")") ||
                    (B[A + 1] === "'" && B[A + 3] === "'")
                  ) {
                    w = assign(B[A], s);
                    y = Math.pow(10, B[A].length);
                    A++;
                  }
                  if (
                    (B[A] === "(" && B[A + 2] === ")") ||
                    (B[A] === "'" && B[A + 2] === "'")
                  ) {
                    x = assign(B[A + 1], s);
                    z = Math.pow(10, B[A + 1].length) - 1;
                    A += 3;
                  }
                } else if (B[A + 1] === "/" || B[A + 1] === ":") {
                  w = assign(B[A], s);
                  y = assign(B[A + 2], 1);
                  A += 3;
                } else if (B[A + 3] === "/" && B[A + 1] === " ") {
                  v = assign(B[A], s);
                  w = assign(B[A + 2], s);
                  y = assign(B[A + 4], 1);
                  A += 5;
                }
                if (B.length <= A) {
                  d = y * z;
                  s = n = x + d * v + z * w;
                  break;
                }
              }
              default:
                throw InvalidParameter();
            }
          if (d === 0) {
            throw DivisionByZero();
          }
          P["s"] = s < 0 ? -1 : 1;
          P["n"] = Math.abs(n);
          P["d"] = Math.abs(d);
        };
        function modpow(b, e, m) {
          var r = 1;
          for (; e > 0; b = (b * b) % m, e >>= 1) {
            if (e & 1) {
              r = (r * b) % m;
            }
          }
          return r;
        }
        function cycleLen(n, d) {
          for (; d % 2 === 0; d /= 2) {}
          for (; d % 5 === 0; d /= 5) {}
          if (d === 1) return 0;
          var rem = 10 % d;
          var t = 1;
          for (; rem !== 1; t++) {
            rem = (rem * 10) % d;
            if (t > MAX_CYCLE_LEN) return 0;
          }
          return t;
        }
        function cycleStart(n, d, len) {
          var rem1 = 1;
          var rem2 = modpow(10, len, d);
          for (var t = 0; t < 300; t++) {
            if (rem1 === rem2) return t;
            rem1 = (rem1 * 10) % d;
            rem2 = (rem2 * 10) % d;
          }
          return 0;
        }
        function gcd(a, b) {
          if (!a) return b;
          if (!b) return a;
          while (1) {
            a %= b;
            if (!a) return b;
            b %= a;
            if (!b) return a;
          }
        }
        function Fraction(a, b) {
          parse(a, b);
          if (this instanceof Fraction) {
            a = gcd(P["d"], P["n"]);
            this["s"] = P["s"];
            this["n"] = P["n"] / a;
            this["d"] = P["d"] / a;
          } else {
            return newFraction(P["s"] * P["n"], P["d"]);
          }
        }
        var DivisionByZero = function () {
          return new Error("Division by Zero");
        };
        var InvalidParameter = function () {
          return new Error("Invalid argument");
        };
        var NonIntegerParameter = function () {
          return new Error("Parameters must be integer");
        };
        Fraction.prototype = {
          s: 1,
          n: 0,
          d: 1,
          abs: function () {
            return newFraction(this["n"], this["d"]);
          },
          neg: function () {
            return newFraction(-this["s"] * this["n"], this["d"]);
          },
          add: function (a, b) {
            parse(a, b);
            return newFraction(
              this["s"] * this["n"] * P["d"] + P["s"] * this["d"] * P["n"],
              this["d"] * P["d"],
            );
          },
          sub: function (a, b) {
            parse(a, b);
            return newFraction(
              this["s"] * this["n"] * P["d"] - P["s"] * this["d"] * P["n"],
              this["d"] * P["d"],
            );
          },
          mul: function (a, b) {
            parse(a, b);
            return newFraction(
              this["s"] * P["s"] * this["n"] * P["n"],
              this["d"] * P["d"],
            );
          },
          div: function (a, b) {
            parse(a, b);
            return newFraction(
              this["s"] * P["s"] * this["n"] * P["d"],
              this["d"] * P["n"],
            );
          },
          clone: function () {
            return newFraction(this["s"] * this["n"], this["d"]);
          },
          mod: function (a, b) {
            if (isNaN(this["n"]) || isNaN(this["d"])) {
              return new Fraction(NaN);
            }
            if (a === undefined) {
              return newFraction((this["s"] * this["n"]) % this["d"], 1);
            }
            parse(a, b);
            if (0 === P["n"] && 0 === this["d"]) {
              throw DivisionByZero();
            }
            return newFraction(
              (this["s"] * (P["d"] * this["n"])) % (P["n"] * this["d"]),
              P["d"] * this["d"],
            );
          },
          gcd: function (a, b) {
            parse(a, b);
            return newFraction(
              gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]),
              P["d"] * this["d"],
            );
          },
          lcm: function (a, b) {
            parse(a, b);
            if (P["n"] === 0 && this["n"] === 0) {
              return newFraction(0, 1);
            }
            return newFraction(
              P["n"] * this["n"],
              gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]),
            );
          },
          ceil: function (places) {
            places = Math.pow(10, places || 0);
            if (isNaN(this["n"]) || isNaN(this["d"])) {
              return new Fraction(NaN);
            }
            return newFraction(
              Math.ceil((places * this["s"] * this["n"]) / this["d"]),
              places,
            );
          },
          floor: function (places) {
            places = Math.pow(10, places || 0);
            if (isNaN(this["n"]) || isNaN(this["d"])) {
              return new Fraction(NaN);
            }
            return newFraction(
              Math.floor((places * this["s"] * this["n"]) / this["d"]),
              places,
            );
          },
          round: function (places) {
            places = Math.pow(10, places || 0);
            if (isNaN(this["n"]) || isNaN(this["d"])) {
              return new Fraction(NaN);
            }
            return newFraction(
              Math.round((places * this["s"] * this["n"]) / this["d"]),
              places,
            );
          },
          roundTo: function (a, b) {
            parse(a, b);
            return newFraction(
              this["s"] *
                Math.round((this["n"] * P["d"]) / (this["d"] * P["n"])) *
                P["n"],
              P["d"],
            );
          },
          inverse: function () {
            return newFraction(this["s"] * this["d"], this["n"]);
          },
          pow: function (a, b) {
            parse(a, b);
            if (P["d"] === 1) {
              if (P["s"] < 0) {
                return newFraction(
                  Math.pow(this["s"] * this["d"], P["n"]),
                  Math.pow(this["n"], P["n"]),
                );
              } else {
                return newFraction(
                  Math.pow(this["s"] * this["n"], P["n"]),
                  Math.pow(this["d"], P["n"]),
                );
              }
            }
            if (this["s"] < 0) return null;
            var N = factorize(this["n"]);
            var D = factorize(this["d"]);
            var n = 1;
            var d = 1;
            for (var k in N) {
              if (k === "1") continue;
              if (k === "0") {
                n = 0;
                break;
              }
              N[k] *= P["n"];
              if (N[k] % P["d"] === 0) {
                N[k] /= P["d"];
              } else return null;
              n *= Math.pow(k, N[k]);
            }
            for (var k in D) {
              if (k === "1") continue;
              D[k] *= P["n"];
              if (D[k] % P["d"] === 0) {
                D[k] /= P["d"];
              } else return null;
              d *= Math.pow(k, D[k]);
            }
            if (P["s"] < 0) {
              return newFraction(d, n);
            }
            return newFraction(n, d);
          },
          equals: function (a, b) {
            parse(a, b);
            return (
              this["s"] * this["n"] * P["d"] === P["s"] * P["n"] * this["d"]
            );
          },
          compare: function (a, b) {
            parse(a, b);
            var t =
              this["s"] * this["n"] * P["d"] - P["s"] * P["n"] * this["d"];
            return (0 < t) - (t < 0);
          },
          simplify: function (eps) {
            if (isNaN(this["n"]) || isNaN(this["d"])) {
              return this;
            }
            eps = eps || 0.001;
            var thisABS = this["abs"]();
            var cont = thisABS["toContinued"]();
            for (var i = 1; i < cont.length; i++) {
              var s = newFraction(cont[i - 1], 1);
              for (var k = i - 2; k >= 0; k--) {
                s = s["inverse"]()["add"](cont[k]);
              }
              if (Math.abs(s["sub"](thisABS).valueOf()) < eps) {
                return s["mul"](this["s"]);
              }
            }
            return this;
          },
          divisible: function (a, b) {
            parse(a, b);
            return !(
              !(P["n"] * this["d"]) ||
              (this["n"] * P["d"]) % (P["n"] * this["d"])
            );
          },
          valueOf: function () {
            return (this["s"] * this["n"]) / this["d"];
          },
          toFraction: function (excludeWhole) {
            var whole,
              str = "";
            var n = this["n"];
            var d = this["d"];
            if (this["s"] < 0) {
              str += "-";
            }
            if (d === 1) {
              str += n;
            } else {
              if (excludeWhole && (whole = Math.floor(n / d)) > 0) {
                str += whole;
                str += " ";
                n %= d;
              }
              str += n;
              str += "/";
              str += d;
            }
            return str;
          },
          toLatex: function (excludeWhole) {
            var whole,
              str = "";
            var n = this["n"];
            var d = this["d"];
            if (this["s"] < 0) {
              str += "-";
            }
            if (d === 1) {
              str += n;
            } else {
              if (excludeWhole && (whole = Math.floor(n / d)) > 0) {
                str += whole;
                n %= d;
              }
              str += "\\frac{";
              str += n;
              str += "}{";
              str += d;
              str += "}";
            }
            return str;
          },
          toContinued: function () {
            var t;
            var a = this["n"];
            var b = this["d"];
            var res = [];
            if (isNaN(a) || isNaN(b)) {
              return res;
            }
            do {
              res.push(Math.floor(a / b));
              t = a % b;
              a = b;
              b = t;
            } while (a !== 1);
            return res;
          },
          toString: function (dec) {
            var N = this["n"];
            var D = this["d"];
            if (isNaN(N) || isNaN(D)) {
              return "NaN";
            }
            dec = dec || 15;
            var cycLen = cycleLen(N, D);
            var cycOff = cycleStart(N, D, cycLen);
            var str = this["s"] < 0 ? "-" : "";
            str += (N / D) | 0;
            N %= D;
            N *= 10;
            if (N) str += ".";
            if (cycLen) {
              for (var i = cycOff; i--; ) {
                str += (N / D) | 0;
                N %= D;
                N *= 10;
              }
              str += "(";
              for (var i = cycLen; i--; ) {
                str += (N / D) | 0;
                N %= D;
                N *= 10;
              }
              str += ")";
            } else {
              for (var i = dec; N && i--; ) {
                str += (N / D) | 0;
                N %= D;
                N *= 10;
              }
            }
            return str;
          },
        };
        if (true) {
          Object.defineProperty(exports, "__esModule", { value: true });
          exports["default"] = Fraction;
          module["exports"] = Fraction;
        } else {
        }
      })(this);
    },
    6052: (module) => {
      "use strict";
      module.exports = JSON.parse(
        '[{"name":"nodejs","version":"0.2.0","date":"2011-08-26","lts":false,"security":false,"v8":"2.3.8.0"},{"name":"nodejs","version":"0.3.0","date":"2011-08-26","lts":false,"security":false,"v8":"2.5.1.0"},{"name":"nodejs","version":"0.4.0","date":"2011-08-26","lts":false,"security":false,"v8":"3.1.2.0"},{"name":"nodejs","version":"0.5.0","date":"2011-08-26","lts":false,"security":false,"v8":"3.1.8.25"},{"name":"nodejs","version":"0.6.0","date":"2011-11-04","lts":false,"security":false,"v8":"3.6.6.6"},{"name":"nodejs","version":"0.7.0","date":"2012-01-17","lts":false,"security":false,"v8":"3.8.6.0"},{"name":"nodejs","version":"0.8.0","date":"2012-06-22","lts":false,"security":false,"v8":"3.11.10.10"},{"name":"nodejs","version":"0.9.0","date":"2012-07-20","lts":false,"security":false,"v8":"3.11.10.15"},{"name":"nodejs","version":"0.10.0","date":"2013-03-11","lts":false,"security":false,"v8":"3.14.5.8"},{"name":"nodejs","version":"0.11.0","date":"2013-03-28","lts":false,"security":false,"v8":"3.17.13.0"},{"name":"nodejs","version":"0.12.0","date":"2015-02-06","lts":false,"security":false,"v8":"3.28.73.0"},{"name":"nodejs","version":"4.0.0","date":"2015-09-08","lts":false,"security":false,"v8":"4.5.103.30"},{"name":"nodejs","version":"4.1.0","date":"2015-09-17","lts":false,"security":false,"v8":"4.5.103.33"},{"name":"nodejs","version":"4.2.0","date":"2015-10-12","lts":"Argon","security":false,"v8":"4.5.103.35"},{"name":"nodejs","version":"4.3.0","date":"2016-02-09","lts":"Argon","security":false,"v8":"4.5.103.35"},{"name":"nodejs","version":"4.4.0","date":"2016-03-08","lts":"Argon","security":false,"v8":"4.5.103.35"},{"name":"nodejs","version":"4.5.0","date":"2016-08-16","lts":"Argon","security":false,"v8":"4.5.103.37"},{"name":"nodejs","version":"4.6.0","date":"2016-09-27","lts":"Argon","security":true,"v8":"4.5.103.37"},{"name":"nodejs","version":"4.7.0","date":"2016-12-06","lts":"Argon","security":false,"v8":"4.5.103.43"},{"name":"nodejs","version":"4.8.0","date":"2017-02-21","lts":"Argon","security":false,"v8":"4.5.103.45"},{"name":"nodejs","version":"4.9.0","date":"2018-03-28","lts":"Argon","security":true,"v8":"4.5.103.53"},{"name":"nodejs","version":"5.0.0","date":"2015-10-29","lts":false,"security":false,"v8":"4.6.85.28"},{"name":"nodejs","version":"5.1.0","date":"2015-11-17","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.2.0","date":"2015-12-09","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.3.0","date":"2015-12-15","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.4.0","date":"2016-01-06","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.5.0","date":"2016-01-21","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.6.0","date":"2016-02-09","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.7.0","date":"2016-02-23","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.8.0","date":"2016-03-09","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.9.0","date":"2016-03-16","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.10.0","date":"2016-04-01","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.11.0","date":"2016-04-21","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.12.0","date":"2016-06-23","lts":false,"security":false,"v8":"4.6.85.32"},{"name":"nodejs","version":"6.0.0","date":"2016-04-26","lts":false,"security":false,"v8":"5.0.71.35"},{"name":"nodejs","version":"6.1.0","date":"2016-05-05","lts":false,"security":false,"v8":"5.0.71.35"},{"name":"nodejs","version":"6.2.0","date":"2016-05-17","lts":false,"security":false,"v8":"5.0.71.47"},{"name":"nodejs","version":"6.3.0","date":"2016-07-06","lts":false,"security":false,"v8":"5.0.71.52"},{"name":"nodejs","version":"6.4.0","date":"2016-08-12","lts":false,"security":false,"v8":"5.0.71.60"},{"name":"nodejs","version":"6.5.0","date":"2016-08-26","lts":false,"security":false,"v8":"5.1.281.81"},{"name":"nodejs","version":"6.6.0","date":"2016-09-14","lts":false,"security":false,"v8":"5.1.281.83"},{"name":"nodejs","version":"6.7.0","date":"2016-09-27","lts":false,"security":true,"v8":"5.1.281.83"},{"name":"nodejs","version":"6.8.0","date":"2016-10-12","lts":false,"security":false,"v8":"5.1.281.84"},{"name":"nodejs","version":"6.9.0","date":"2016-10-18","lts":"Boron","security":false,"v8":"5.1.281.84"},{"name":"nodejs","version":"6.10.0","date":"2017-02-21","lts":"Boron","security":false,"v8":"5.1.281.93"},{"name":"nodejs","version":"6.11.0","date":"2017-06-06","lts":"Boron","security":false,"v8":"5.1.281.102"},{"name":"nodejs","version":"6.12.0","date":"2017-11-06","lts":"Boron","security":false,"v8":"5.1.281.108"},{"name":"nodejs","version":"6.13.0","date":"2018-02-10","lts":"Boron","security":false,"v8":"5.1.281.111"},{"name":"nodejs","version":"6.14.0","date":"2018-03-28","lts":"Boron","security":true,"v8":"5.1.281.111"},{"name":"nodejs","version":"6.15.0","date":"2018-11-27","lts":"Boron","security":true,"v8":"5.1.281.111"},{"name":"nodejs","version":"6.16.0","date":"2018-12-26","lts":"Boron","security":false,"v8":"5.1.281.111"},{"name":"nodejs","version":"6.17.0","date":"2019-02-28","lts":"Boron","security":true,"v8":"5.1.281.111"},{"name":"nodejs","version":"7.0.0","date":"2016-10-25","lts":false,"security":false,"v8":"5.4.500.36"},{"name":"nodejs","version":"7.1.0","date":"2016-11-08","lts":false,"security":false,"v8":"5.4.500.36"},{"name":"nodejs","version":"7.2.0","date":"2016-11-22","lts":false,"security":false,"v8":"5.4.500.43"},{"name":"nodejs","version":"7.3.0","date":"2016-12-20","lts":false,"security":false,"v8":"5.4.500.45"},{"name":"nodejs","version":"7.4.0","date":"2017-01-04","lts":false,"security":false,"v8":"5.4.500.45"},{"name":"nodejs","version":"7.5.0","date":"2017-01-31","lts":false,"security":false,"v8":"5.4.500.48"},{"name":"nodejs","version":"7.6.0","date":"2017-02-21","lts":false,"security":false,"v8":"5.5.372.40"},{"name":"nodejs","version":"7.7.0","date":"2017-02-28","lts":false,"security":false,"v8":"5.5.372.41"},{"name":"nodejs","version":"7.8.0","date":"2017-03-29","lts":false,"security":false,"v8":"5.5.372.43"},{"name":"nodejs","version":"7.9.0","date":"2017-04-11","lts":false,"security":false,"v8":"5.5.372.43"},{"name":"nodejs","version":"7.10.0","date":"2017-05-02","lts":false,"security":false,"v8":"5.5.372.43"},{"name":"nodejs","version":"8.0.0","date":"2017-05-30","lts":false,"security":false,"v8":"5.8.283.41"},{"name":"nodejs","version":"8.1.0","date":"2017-06-08","lts":false,"security":false,"v8":"5.8.283.41"},{"name":"nodejs","version":"8.2.0","date":"2017-07-19","lts":false,"security":false,"v8":"5.8.283.41"},{"name":"nodejs","version":"8.3.0","date":"2017-08-08","lts":false,"security":false,"v8":"6.0.286.52"},{"name":"nodejs","version":"8.4.0","date":"2017-08-15","lts":false,"security":false,"v8":"6.0.286.52"},{"name":"nodejs","version":"8.5.0","date":"2017-09-12","lts":false,"security":false,"v8":"6.0.287.53"},{"name":"nodejs","version":"8.6.0","date":"2017-09-26","lts":false,"security":false,"v8":"6.0.287.53"},{"name":"nodejs","version":"8.7.0","date":"2017-10-11","lts":false,"security":false,"v8":"6.1.534.42"},{"name":"nodejs","version":"8.8.0","date":"2017-10-24","lts":false,"security":false,"v8":"6.1.534.42"},{"name":"nodejs","version":"8.9.0","date":"2017-10-31","lts":"Carbon","security":false,"v8":"6.1.534.46"},{"name":"nodejs","version":"8.10.0","date":"2018-03-06","lts":"Carbon","security":false,"v8":"6.2.414.50"},{"name":"nodejs","version":"8.11.0","date":"2018-03-28","lts":"Carbon","security":true,"v8":"6.2.414.50"},{"name":"nodejs","version":"8.12.0","date":"2018-09-10","lts":"Carbon","security":false,"v8":"6.2.414.66"},{"name":"nodejs","version":"8.13.0","date":"2018-11-20","lts":"Carbon","security":false,"v8":"6.2.414.72"},{"name":"nodejs","version":"8.14.0","date":"2018-11-27","lts":"Carbon","security":true,"v8":"6.2.414.72"},{"name":"nodejs","version":"8.15.0","date":"2018-12-26","lts":"Carbon","security":false,"v8":"6.2.414.75"},{"name":"nodejs","version":"8.16.0","date":"2019-04-16","lts":"Carbon","security":false,"v8":"6.2.414.77"},{"name":"nodejs","version":"8.17.0","date":"2019-12-17","lts":"Carbon","security":true,"v8":"6.2.414.78"},{"name":"nodejs","version":"9.0.0","date":"2017-10-31","lts":false,"security":false,"v8":"6.2.414.32"},{"name":"nodejs","version":"9.1.0","date":"2017-11-07","lts":false,"security":false,"v8":"6.2.414.32"},{"name":"nodejs","version":"9.2.0","date":"2017-11-14","lts":false,"security":false,"v8":"6.2.414.44"},{"name":"nodejs","version":"9.3.0","date":"2017-12-12","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.4.0","date":"2018-01-10","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.5.0","date":"2018-01-31","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.6.0","date":"2018-02-21","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.7.0","date":"2018-03-01","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.8.0","date":"2018-03-07","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.9.0","date":"2018-03-21","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.10.0","date":"2018-03-28","lts":false,"security":true,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.11.0","date":"2018-04-04","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"10.0.0","date":"2018-04-24","lts":false,"security":false,"v8":"6.6.346.24"},{"name":"nodejs","version":"10.1.0","date":"2018-05-08","lts":false,"security":false,"v8":"6.6.346.27"},{"name":"nodejs","version":"10.2.0","date":"2018-05-23","lts":false,"security":false,"v8":"6.6.346.32"},{"name":"nodejs","version":"10.3.0","date":"2018-05-29","lts":false,"security":false,"v8":"6.6.346.32"},{"name":"nodejs","version":"10.4.0","date":"2018-06-06","lts":false,"security":false,"v8":"6.7.288.43"},{"name":"nodejs","version":"10.5.0","date":"2018-06-20","lts":false,"security":false,"v8":"6.7.288.46"},{"name":"nodejs","version":"10.6.0","date":"2018-07-04","lts":false,"security":false,"v8":"6.7.288.46"},{"name":"nodejs","version":"10.7.0","date":"2018-07-18","lts":false,"security":false,"v8":"6.7.288.49"},{"name":"nodejs","version":"10.8.0","date":"2018-08-01","lts":false,"security":false,"v8":"6.7.288.49"},{"name":"nodejs","version":"10.9.0","date":"2018-08-15","lts":false,"security":false,"v8":"6.8.275.24"},{"name":"nodejs","version":"10.10.0","date":"2018-09-06","lts":false,"security":false,"v8":"6.8.275.30"},{"name":"nodejs","version":"10.11.0","date":"2018-09-19","lts":false,"security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.12.0","date":"2018-10-10","lts":false,"security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.13.0","date":"2018-10-30","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.14.0","date":"2018-11-27","lts":"Dubnium","security":true,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.15.0","date":"2018-12-26","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.16.0","date":"2019-05-28","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.17.0","date":"2019-10-22","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.18.0","date":"2019-12-17","lts":"Dubnium","security":true,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.19.0","date":"2020-02-05","lts":"Dubnium","security":true,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.20.0","date":"2020-03-26","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.21.0","date":"2020-06-02","lts":"Dubnium","security":true,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.22.0","date":"2020-07-21","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.23.0","date":"2020-10-27","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.24.0","date":"2021-02-23","lts":"Dubnium","security":true,"v8":"6.8.275.32"},{"name":"nodejs","version":"11.0.0","date":"2018-10-23","lts":false,"security":false,"v8":"7.0.276.28"},{"name":"nodejs","version":"11.1.0","date":"2018-10-30","lts":false,"security":false,"v8":"7.0.276.32"},{"name":"nodejs","version":"11.2.0","date":"2018-11-15","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.3.0","date":"2018-11-27","lts":false,"security":true,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.4.0","date":"2018-12-07","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.5.0","date":"2018-12-18","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.6.0","date":"2018-12-26","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.7.0","date":"2019-01-17","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.8.0","date":"2019-01-24","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.9.0","date":"2019-01-30","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.10.0","date":"2019-02-14","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.11.0","date":"2019-03-05","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.12.0","date":"2019-03-14","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.13.0","date":"2019-03-28","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.14.0","date":"2019-04-10","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.15.0","date":"2019-04-30","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"12.0.0","date":"2019-04-23","lts":false,"security":false,"v8":"7.4.288.21"},{"name":"nodejs","version":"12.1.0","date":"2019-04-29","lts":false,"security":false,"v8":"7.4.288.21"},{"name":"nodejs","version":"12.2.0","date":"2019-05-07","lts":false,"security":false,"v8":"7.4.288.21"},{"name":"nodejs","version":"12.3.0","date":"2019-05-21","lts":false,"security":false,"v8":"7.4.288.27"},{"name":"nodejs","version":"12.4.0","date":"2019-06-04","lts":false,"security":false,"v8":"7.4.288.27"},{"name":"nodejs","version":"12.5.0","date":"2019-06-26","lts":false,"security":false,"v8":"7.5.288.22"},{"name":"nodejs","version":"12.6.0","date":"2019-07-03","lts":false,"security":false,"v8":"7.5.288.22"},{"name":"nodejs","version":"12.7.0","date":"2019-07-23","lts":false,"security":false,"v8":"7.5.288.22"},{"name":"nodejs","version":"12.8.0","date":"2019-08-06","lts":false,"security":false,"v8":"7.5.288.22"},{"name":"nodejs","version":"12.9.0","date":"2019-08-20","lts":false,"security":false,"v8":"7.6.303.29"},{"name":"nodejs","version":"12.10.0","date":"2019-09-04","lts":false,"security":false,"v8":"7.6.303.29"},{"name":"nodejs","version":"12.11.0","date":"2019-09-25","lts":false,"security":false,"v8":"7.7.299.11"},{"name":"nodejs","version":"12.12.0","date":"2019-10-11","lts":false,"security":false,"v8":"7.7.299.13"},{"name":"nodejs","version":"12.13.0","date":"2019-10-21","lts":"Erbium","security":false,"v8":"7.7.299.13"},{"name":"nodejs","version":"12.14.0","date":"2019-12-17","lts":"Erbium","security":true,"v8":"7.7.299.13"},{"name":"nodejs","version":"12.15.0","date":"2020-02-05","lts":"Erbium","security":true,"v8":"7.7.299.13"},{"name":"nodejs","version":"12.16.0","date":"2020-02-11","lts":"Erbium","security":false,"v8":"7.8.279.23"},{"name":"nodejs","version":"12.17.0","date":"2020-05-26","lts":"Erbium","security":false,"v8":"7.8.279.23"},{"name":"nodejs","version":"12.18.0","date":"2020-06-02","lts":"Erbium","security":true,"v8":"7.8.279.23"},{"name":"nodejs","version":"12.19.0","date":"2020-10-06","lts":"Erbium","security":false,"v8":"7.8.279.23"},{"name":"nodejs","version":"12.20.0","date":"2020-11-24","lts":"Erbium","security":false,"v8":"7.8.279.23"},{"name":"nodejs","version":"12.21.0","date":"2021-02-23","lts":"Erbium","security":true,"v8":"7.8.279.23"},{"name":"nodejs","version":"12.22.0","date":"2021-03-30","lts":"Erbium","security":false,"v8":"7.8.279.23"},{"name":"nodejs","version":"13.0.0","date":"2019-10-22","lts":false,"security":false,"v8":"7.8.279.17"},{"name":"nodejs","version":"13.1.0","date":"2019-11-05","lts":false,"security":false,"v8":"7.8.279.17"},{"name":"nodejs","version":"13.2.0","date":"2019-11-21","lts":false,"security":false,"v8":"7.9.317.23"},{"name":"nodejs","version":"13.3.0","date":"2019-12-03","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.4.0","date":"2019-12-17","lts":false,"security":true,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.5.0","date":"2019-12-18","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.6.0","date":"2020-01-07","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.7.0","date":"2020-01-21","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.8.0","date":"2020-02-05","lts":false,"security":true,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.9.0","date":"2020-02-18","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.10.0","date":"2020-03-04","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.11.0","date":"2020-03-12","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.12.0","date":"2020-03-26","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.13.0","date":"2020-04-14","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.14.0","date":"2020-04-29","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"14.0.0","date":"2020-04-21","lts":false,"security":false,"v8":"8.1.307.30"},{"name":"nodejs","version":"14.1.0","date":"2020-04-29","lts":false,"security":false,"v8":"8.1.307.31"},{"name":"nodejs","version":"14.2.0","date":"2020-05-05","lts":false,"security":false,"v8":"8.1.307.31"},{"name":"nodejs","version":"14.3.0","date":"2020-05-19","lts":false,"security":false,"v8":"8.1.307.31"},{"name":"nodejs","version":"14.4.0","date":"2020-06-02","lts":false,"security":true,"v8":"8.1.307.31"},{"name":"nodejs","version":"14.5.0","date":"2020-06-30","lts":false,"security":false,"v8":"8.3.110.9"},{"name":"nodejs","version":"14.6.0","date":"2020-07-20","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.7.0","date":"2020-07-29","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.8.0","date":"2020-08-11","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.9.0","date":"2020-08-27","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.10.0","date":"2020-09-08","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.11.0","date":"2020-09-15","lts":false,"security":true,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.12.0","date":"2020-09-22","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.13.0","date":"2020-09-29","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.14.0","date":"2020-10-15","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.15.0","date":"2020-10-27","lts":"Fermium","security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.16.0","date":"2021-02-23","lts":"Fermium","security":true,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.17.0","date":"2021-05-11","lts":"Fermium","security":false,"v8":"8.4.371.23"},{"name":"nodejs","version":"14.18.0","date":"2021-09-28","lts":"Fermium","security":false,"v8":"8.4.371.23"},{"name":"nodejs","version":"14.19.0","date":"2022-02-01","lts":"Fermium","security":false,"v8":"8.4.371.23"},{"name":"nodejs","version":"14.20.0","date":"2022-07-07","lts":"Fermium","security":true,"v8":"8.4.371.23"},{"name":"nodejs","version":"14.21.0","date":"2022-11-01","lts":"Fermium","security":false,"v8":"8.4.371.23"},{"name":"nodejs","version":"15.0.0","date":"2020-10-20","lts":false,"security":false,"v8":"8.6.395.16"},{"name":"nodejs","version":"15.1.0","date":"2020-11-04","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.2.0","date":"2020-11-10","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.3.0","date":"2020-11-24","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.4.0","date":"2020-12-09","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.5.0","date":"2020-12-22","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.6.0","date":"2021-01-14","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.7.0","date":"2021-01-25","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.8.0","date":"2021-02-02","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.9.0","date":"2021-02-18","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.10.0","date":"2021-02-23","lts":false,"security":true,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.11.0","date":"2021-03-03","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.12.0","date":"2021-03-17","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.13.0","date":"2021-03-31","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.14.0","date":"2021-04-06","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"16.0.0","date":"2021-04-20","lts":false,"security":false,"v8":"9.0.257.17"},{"name":"nodejs","version":"16.1.0","date":"2021-05-04","lts":false,"security":false,"v8":"9.0.257.24"},{"name":"nodejs","version":"16.2.0","date":"2021-05-19","lts":false,"security":false,"v8":"9.0.257.25"},{"name":"nodejs","version":"16.3.0","date":"2021-06-03","lts":false,"security":false,"v8":"9.0.257.25"},{"name":"nodejs","version":"16.4.0","date":"2021-06-23","lts":false,"security":false,"v8":"9.1.269.36"},{"name":"nodejs","version":"16.5.0","date":"2021-07-14","lts":false,"security":false,"v8":"9.1.269.38"},{"name":"nodejs","version":"16.6.0","date":"2021-07-29","lts":false,"security":true,"v8":"9.2.230.21"},{"name":"nodejs","version":"16.7.0","date":"2021-08-18","lts":false,"security":false,"v8":"9.2.230.21"},{"name":"nodejs","version":"16.8.0","date":"2021-08-25","lts":false,"security":false,"v8":"9.2.230.21"},{"name":"nodejs","version":"16.9.0","date":"2021-09-07","lts":false,"security":false,"v8":"9.3.345.16"},{"name":"nodejs","version":"16.10.0","date":"2021-09-22","lts":false,"security":false,"v8":"9.3.345.19"},{"name":"nodejs","version":"16.11.0","date":"2021-10-08","lts":false,"security":false,"v8":"9.4.146.19"},{"name":"nodejs","version":"16.12.0","date":"2021-10-20","lts":false,"security":false,"v8":"9.4.146.19"},{"name":"nodejs","version":"16.13.0","date":"2021-10-26","lts":"Gallium","security":false,"v8":"9.4.146.19"},{"name":"nodejs","version":"16.14.0","date":"2022-02-08","lts":"Gallium","security":false,"v8":"9.4.146.24"},{"name":"nodejs","version":"16.15.0","date":"2022-04-26","lts":"Gallium","security":false,"v8":"9.4.146.24"},{"name":"nodejs","version":"16.16.0","date":"2022-07-07","lts":"Gallium","security":true,"v8":"9.4.146.24"},{"name":"nodejs","version":"16.17.0","date":"2022-08-16","lts":"Gallium","security":false,"v8":"9.4.146.26"},{"name":"nodejs","version":"16.18.0","date":"2022-10-12","lts":"Gallium","security":false,"v8":"9.4.146.26"},{"name":"nodejs","version":"16.19.0","date":"2022-12-13","lts":"Gallium","security":false,"v8":"9.4.146.26"},{"name":"nodejs","version":"16.20.0","date":"2023-03-28","lts":"Gallium","security":false,"v8":"9.4.146.26"},{"name":"nodejs","version":"17.0.0","date":"2021-10-19","lts":false,"security":false,"v8":"9.5.172.21"},{"name":"nodejs","version":"17.1.0","date":"2021-11-09","lts":false,"security":false,"v8":"9.5.172.25"},{"name":"nodejs","version":"17.2.0","date":"2021-11-30","lts":false,"security":false,"v8":"9.6.180.14"},{"name":"nodejs","version":"17.3.0","date":"2021-12-17","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"17.4.0","date":"2022-01-18","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"17.5.0","date":"2022-02-10","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"17.6.0","date":"2022-02-22","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"17.7.0","date":"2022-03-09","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"17.8.0","date":"2022-03-22","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"17.9.0","date":"2022-04-07","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"18.0.0","date":"2022-04-18","lts":false,"security":false,"v8":"10.1.124.8"},{"name":"nodejs","version":"18.1.0","date":"2022-05-03","lts":false,"security":false,"v8":"10.1.124.8"},{"name":"nodejs","version":"18.2.0","date":"2022-05-17","lts":false,"security":false,"v8":"10.1.124.8"},{"name":"nodejs","version":"18.3.0","date":"2022-06-02","lts":false,"security":false,"v8":"10.2.154.4"},{"name":"nodejs","version":"18.4.0","date":"2022-06-16","lts":false,"security":false,"v8":"10.2.154.4"},{"name":"nodejs","version":"18.5.0","date":"2022-07-06","lts":false,"security":true,"v8":"10.2.154.4"},{"name":"nodejs","version":"18.6.0","date":"2022-07-13","lts":false,"security":false,"v8":"10.2.154.13"},{"name":"nodejs","version":"18.7.0","date":"2022-07-26","lts":false,"security":false,"v8":"10.2.154.13"},{"name":"nodejs","version":"18.8.0","date":"2022-08-24","lts":false,"security":false,"v8":"10.2.154.13"},{"name":"nodejs","version":"18.9.0","date":"2022-09-07","lts":false,"security":false,"v8":"10.2.154.15"},{"name":"nodejs","version":"18.10.0","date":"2022-09-28","lts":false,"security":false,"v8":"10.2.154.15"},{"name":"nodejs","version":"18.11.0","date":"2022-10-13","lts":false,"security":false,"v8":"10.2.154.15"},{"name":"nodejs","version":"18.12.0","date":"2022-10-25","lts":"Hydrogen","security":false,"v8":"10.2.154.15"},{"name":"nodejs","version":"18.13.0","date":"2023-01-05","lts":"Hydrogen","security":false,"v8":"10.2.154.23"},{"name":"nodejs","version":"18.14.0","date":"2023-02-01","lts":"Hydrogen","security":false,"v8":"10.2.154.23"},{"name":"nodejs","version":"18.15.0","date":"2023-03-05","lts":"Hydrogen","security":false,"v8":"10.2.154.26"},{"name":"nodejs","version":"18.16.0","date":"2023-04-12","lts":"Hydrogen","security":false,"v8":"10.2.154.26"},{"name":"nodejs","version":"18.17.0","date":"2023-07-18","lts":"Hydrogen","security":false,"v8":"10.2.154.26"},{"name":"nodejs","version":"18.18.0","date":"2023-09-18","lts":"Hydrogen","security":false,"v8":"10.2.154.26"},{"name":"nodejs","version":"18.19.0","date":"2023-11-29","lts":"Hydrogen","security":false,"v8":"10.2.154.26"},{"name":"nodejs","version":"18.20.0","date":"2024-03-26","lts":"Hydrogen","security":false,"v8":"10.2.154.26"},{"name":"nodejs","version":"19.0.0","date":"2022-10-17","lts":false,"security":false,"v8":"10.7.193.13"},{"name":"nodejs","version":"19.1.0","date":"2022-11-14","lts":false,"security":false,"v8":"10.7.193.20"},{"name":"nodejs","version":"19.2.0","date":"2022-11-29","lts":false,"security":false,"v8":"10.8.168.20"},{"name":"nodejs","version":"19.3.0","date":"2022-12-14","lts":false,"security":false,"v8":"10.8.168.21"},{"name":"nodejs","version":"19.4.0","date":"2023-01-05","lts":false,"security":false,"v8":"10.8.168.25"},{"name":"nodejs","version":"19.5.0","date":"2023-01-24","lts":false,"security":false,"v8":"10.8.168.25"},{"name":"nodejs","version":"19.6.0","date":"2023-02-01","lts":false,"security":false,"v8":"10.8.168.25"},{"name":"nodejs","version":"19.7.0","date":"2023-02-21","lts":false,"security":false,"v8":"10.8.168.25"},{"name":"nodejs","version":"19.8.0","date":"2023-03-14","lts":false,"security":false,"v8":"10.8.168.25"},{"name":"nodejs","version":"19.9.0","date":"2023-04-10","lts":false,"security":false,"v8":"10.8.168.25"},{"name":"nodejs","version":"20.0.0","date":"2023-04-17","lts":false,"security":false,"v8":"11.3.244.4"},{"name":"nodejs","version":"20.1.0","date":"2023-05-03","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.2.0","date":"2023-05-16","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.3.0","date":"2023-06-08","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.4.0","date":"2023-07-04","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.5.0","date":"2023-07-19","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.6.0","date":"2023-08-23","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.7.0","date":"2023-09-18","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.8.0","date":"2023-09-28","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.9.0","date":"2023-10-24","lts":"Iron","security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.10.0","date":"2023-11-22","lts":"Iron","security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.11.0","date":"2024-01-09","lts":"Iron","security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.12.0","date":"2024-03-26","lts":"Iron","security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.13.0","date":"2024-05-07","lts":"Iron","security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.14.0","date":"2024-05-28","lts":"Iron","security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.15.0","date":"2024-06-20","lts":"Iron","security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"21.0.0","date":"2023-10-17","lts":false,"security":false,"v8":"11.8.172.13"},{"name":"nodejs","version":"21.1.0","date":"2023-10-24","lts":false,"security":false,"v8":"11.8.172.15"},{"name":"nodejs","version":"21.2.0","date":"2023-11-14","lts":false,"security":false,"v8":"11.8.172.17"},{"name":"nodejs","version":"21.3.0","date":"2023-11-30","lts":false,"security":false,"v8":"11.8.172.17"},{"name":"nodejs","version":"21.4.0","date":"2023-12-05","lts":false,"security":false,"v8":"11.8.172.17"},{"name":"nodejs","version":"21.5.0","date":"2023-12-19","lts":false,"security":false,"v8":"11.8.172.17"},{"name":"nodejs","version":"21.6.0","date":"2024-01-14","lts":false,"security":false,"v8":"11.8.172.17"},{"name":"nodejs","version":"21.7.0","date":"2024-03-06","lts":false,"security":false,"v8":"11.8.172.17"},{"name":"nodejs","version":"22.0.0","date":"2024-04-24","lts":false,"security":false,"v8":"12.4.254.14"},{"name":"nodejs","version":"22.1.0","date":"2024-05-02","lts":false,"security":false,"v8":"12.4.254.14"},{"name":"nodejs","version":"22.2.0","date":"2024-05-15","lts":false,"security":false,"v8":"12.4.254.14"},{"name":"nodejs","version":"22.3.0","date":"2024-06-11","lts":false,"security":false,"v8":"12.4.254.20"},{"name":"nodejs","version":"22.4.0","date":"2024-07-02","lts":false,"security":false,"v8":"12.4.254.21"},{"name":"nodejs","version":"22.5.0","date":"2024-07-17","lts":false,"security":false,"v8":"12.4.254.21"}]',
      );
    },
    8864: (module) => {
      "use strict";
      module.exports = JSON.parse(
        '{"v0.8":{"start":"2012-06-25","end":"2014-07-31"},"v0.10":{"start":"2013-03-11","end":"2016-10-31"},"v0.12":{"start":"2015-02-06","end":"2016-12-31"},"v4":{"start":"2015-09-08","lts":"2015-10-12","maintenance":"2017-04-01","end":"2018-04-30","codename":"Argon"},"v5":{"start":"2015-10-29","maintenance":"2016-04-30","end":"2016-06-30"},"v6":{"start":"2016-04-26","lts":"2016-10-18","maintenance":"2018-04-30","end":"2019-04-30","codename":"Boron"},"v7":{"start":"2016-10-25","maintenance":"2017-04-30","end":"2017-06-30"},"v8":{"start":"2017-05-30","lts":"2017-10-31","maintenance":"2019-01-01","end":"2019-12-31","codename":"Carbon"},"v9":{"start":"2017-10-01","maintenance":"2018-04-01","end":"2018-06-30"},"v10":{"start":"2018-04-24","lts":"2018-10-30","maintenance":"2020-05-19","end":"2021-04-30","codename":"Dubnium"},"v11":{"start":"2018-10-23","maintenance":"2019-04-22","end":"2019-06-01"},"v12":{"start":"2019-04-23","lts":"2019-10-21","maintenance":"2020-11-30","end":"2022-04-30","codename":"Erbium"},"v13":{"start":"2019-10-22","maintenance":"2020-04-01","end":"2020-06-01"},"v14":{"start":"2020-04-21","lts":"2020-10-27","maintenance":"2021-10-19","end":"2023-04-30","codename":"Fermium"},"v15":{"start":"2020-10-20","maintenance":"2021-04-01","end":"2021-06-01"},"v16":{"start":"2021-04-20","lts":"2021-10-26","maintenance":"2022-10-18","end":"2023-09-11","codename":"Gallium"},"v17":{"start":"2021-10-19","maintenance":"2022-04-01","end":"2022-06-01"},"v18":{"start":"2022-04-19","lts":"2022-10-25","maintenance":"2023-10-18","end":"2025-04-30","codename":"Hydrogen"},"v19":{"start":"2022-10-18","maintenance":"2023-04-01","end":"2023-06-01"},"v20":{"start":"2023-04-18","lts":"2023-10-24","maintenance":"2024-10-22","end":"2026-04-30","codename":"Iron"},"v21":{"start":"2023-10-17","maintenance":"2024-04-01","end":"2024-06-01"},"v22":{"start":"2024-04-24","lts":"2024-10-29","maintenance":"2025-10-21","end":"2027-04-30","codename":""},"v23":{"start":"2024-10-15","maintenance":"2025-04-01","end":"2025-06-01"},"v24":{"start":"2025-04-22","lts":"2025-10-28","maintenance":"2026-10-20","end":"2028-04-30","codename":""}}',
      );
    },
  };
  var __webpack_module_cache__ = {};
  function __nccwpck_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = (__webpack_module_cache__[moduleId] = { exports: {} });
    var threw = true;
    try {
      __webpack_modules__[moduleId].call(
        module.exports,
        module,
        module.exports,
        __nccwpck_require__,
      );
      threw = false;
    } finally {
      if (threw) delete __webpack_module_cache__[moduleId];
    }
    return module.exports;
  }
  (() => {
    __nccwpck_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
  })();
  if (typeof __nccwpck_require__ !== "undefined")
    __nccwpck_require__.ab = __dirname + "/";
  var __webpack_exports__ = __nccwpck_require__(1376);
  module.exports = __webpack_exports__;
})();
