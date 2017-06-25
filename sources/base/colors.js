const Color   = require('tinycolor2');
const utils   = require('../utils');

const lighten = utils.lighten;
const darken  = utils.darken;
const fade    = utils.fade;

const BACKGROUND  = Color('#263238');
const FOREGROUND  = Color('#99aeb8');
const TURQUOISE   = Color('#117daf');
const BLACK       = Color('#000');
const WHITE       = Color('#fff');
const BLIND       = Color('#00000000');

module.exports = {
  'focusBorder':                              fade(TURQUOISE, .5),
  'selection.background':                     fade(TURQUOISE, .7),

  // textLink

  'textLink.foreground':                      '#80cbc4',
  'textLink.activeForeground':                '#eeffff',

  // Editor

  'editor.background':                        BACKGROUND,
  'editor.foreground':                        lighten(FOREGROUND, 20),
  'editor.lineHighlightBackground':           fade(BLACK, 0.13),
  'editor.selectionBackground':               fade(TURQUOISE, .35),
  'editor.selectionHighlightBackground':      fade(TURQUOISE, .2),
  'editorLineNumber.foreground':              lighten(BACKGROUND, 15),
  'editorBracketMatch.border':                lighten(BACKGROUND, 35),
  'editorIndentGuide.background':             fade(lighten(BACKGROUND, 15), .32),
  'editorGroupHeader.tabsBackground':         darken(BACKGROUND, 3),
  'editorGroupHeader.tabsBorder':             darken(BACKGROUND, 6),
  'editorGroup.border':                       darken(BACKGROUND, 6),
  'editorLink.activeForeground':              '#eeffff',
  'editorCursor.foreground':                  fade(WHITE, .7),

  // Tab

  'tab.activeForeground':                     lighten(FOREGROUND, 10),
  'tab.inactiveForeground':                   darken(FOREGROUND, 20),
  'tab.inactiveBackground':                   darken(BACKGROUND, 3),
  'tab.unfocusedActiveForeground':            darken(FOREGROUND, 20),
  'tab.border':                               darken(BACKGROUND, 6),

  // StatusBar

  'statusBar.background':                     darken(BACKGROUND, 3),
  'statusBar.border':                         darken(BACKGROUND, 6),
  'statusBar.foreground':                     darken(FOREGROUND, 15),
  'statusBarItem.hoverBackground':            fade(BLACK, .25),
  'statusBarItem.activeBackground':           fade(BLACK, .35),
  'statusBar.debuggingBackground':            '#4a4028',
  'statusBar.debuggingForeground':            '#fff',
  'statusBar.noFolderBackground':             '#28454a',
  'statusBar.noFolderForeground':             '#fff',

  // ActivityBar

  'activityBar.background':                   darken(BACKGROUND, 3),
  'activityBar.border':                       darken(BACKGROUND, 6),
  'activityBar.foreground':                   lighten(FOREGROUND, 3),
  'activityBarBadge.background':              TURQUOISE,
  'activityBarBadge.foreground':              WHITE,

  // TitleBar

  'titleBar.activeBackground':                BACKGROUND,
  'titleBar.activeForeground':                '#546e7a',
  'titleBar.inactiveBackground':              BACKGROUND,
  'titleBar.inactiveForeground':              '#546e7a',

  // Sidebar

  'sideBar.background':                       darken(BACKGROUND, 3),
  'sideBar.border':                           darken(BACKGROUND, 6),
  'sideBar.foreground':                       FOREGROUND,
  'sideBarTitle.foreground':                  darken(FOREGROUND, 15),
  'sideBarSectionHeader.background':          BACKGROUND,

  // Inputs

  'input.background':                         darken(BACKGROUND, 7),
  'input.foreground':                         lighten(FOREGROUND, 10),
  'input.placeholderForeground':              FOREGROUND,
  'input.border':                             darken(BACKGROUND, 8.5),
  'inputValidation.errorBorder':              '#ff5370',
  'inputValidation.infoBorder':               '#82aaff',
  'inputValidation.warningBorder':            '#ffcb6b',
  'dropdown.background':                      darken(BACKGROUND, 4),
  'dropdown.border':                          darken(BACKGROUND, 7),

  'list.hoverForeground':                     lighten(FOREGROUND, 10),
  'list.focusForeground':                     lighten(FOREGROUND, 15),
  'list.inactiveSelectionForeground':         FOREGROUND,
  'list.activeSelectionForeground':           lighten(FOREGROUND, 20),

  'list.hoverBackground':                     fade(BLACK, .1),
  'list.focusBackground':                     fade(BLACK, .2),
  'list.inactiveSelectionBackground':         fade(BLACK, .25),
  'list.activeSelectionBackground':           fade(BLACK, .27),

  'list.highlightForeground':                 lighten(TURQUOISE, 15),

  // ScrollBar

  'scrollbarSlider.background':               fade(BLACK, 0.2),
  'scrollbarSlider.hoverBackground':          fade(BLACK, 0.3),
  'scrollbarSlider.activeBackground':         fade(BLACK, 0.4),
  'scrollbar.shadow':                         darken(BACKGROUND, 6),

  // editorSuggestWidget

  'editorSuggestWidget.background':           darken(BACKGROUND, 4),
  'editorSuggestWidget.foreground':           lighten(FOREGROUND, 15),
  'editorSuggestWidget.highlightForeground':  TURQUOISE,
  'editorSuggestWidget.selectedBackground':   fade(BLACK, .2),
  'editorSuggestWidget.border':               darken(BACKGROUND, 9),

  // Widgets

  'editorWidget.background':                  darken(BACKGROUND, 5),
  'widget.shadow':                            darken(BACKGROUND, 7),
  'editorHoverWidget.background':             darken(BACKGROUND, 5),
  'editorHoverWidget.border':                 darken(BACKGROUND, 7),

  // Panel

  'panel.background':                         darken(BACKGROUND, 4),
  'panel.border':                             darken(BACKGROUND, 7),
  'panelTitle.activeForeground':              darken(FOREGROUND, 10),
  'panelTitle.activeBorder':                  BLIND,

  // DiffEditor

  'diffEditor.insertedTextBackground':        '#c3e88d15',
  'diffEditor.removedTextBackground':         '#ff537020',

  // Notification

  'notification.background':                  BACKGROUND,
  'notification.foreground':                  '#eeffff',

  // Badge

  'badge.background':                         '#00000030',
  'badge.foreground':                         '#546e7a',
  'button.background':                        '#80cbc420',

  // ExtensionButton

  'extensionButton.prominentBackground':      '#c3e88d90',
  'extensionButton.prominentHoverBackground': '#c3e88d',

  // PeekView

  'peekView.border':                          '#00000030',
  'peekViewEditor.background':                '#eeffff05',
  'peekViewTitle.background':                 '#eeffff05',
  'peekViewResult.background':                '#eeffff05',
  'peekViewEditorGutter.background':          '#eeffff05',
  'peekViewTitleDescription.foreground':      '#eeffff60',

  // Terminal

  'terminal.ansiWhite':                       '#ffffff',
  'terminal.ansiBlack':                       '#546e7a',
  'terminal.ansiBlue':                        '#82aaff',
  'terminal.ansiCyan':                        '#89ddff',
  'terminal.ansiGreen':                       '#c3e88d',
  'terminal.ansiMagenta':                     '#c792ea',
  'terminal.ansiRed':                         '#ff5370',
  'terminal.ansiYellow':                      '#ffcb6b',
  'terminal.ansiBrightWhite':                 '#ffffff',
  'terminal.ansiBrightBlack':                 '#546e7a',
  'terminal.ansiBrightBlue':                  '#82aaff',
  'terminal.ansiBrightCyan':                  '#89ddff',
  'terminal.ansiBrightGreen':                 '#c3e88d',
  'terminal.ansiBrightMagenta':               '#c792ea',
  'terminal.ansiBrightRed':                   '#ff5370',
  'terminal.ansiBrightYellow':                '#ffcb6b'
}
