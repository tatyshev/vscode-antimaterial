const Color   = require('tinycolor2');
const utils   = require('../utils');

const lighten = utils.lighten;
const darken  = utils.darken;
const fade    = utils.fade;

const BACKGROUND  = Color('#2F2833');
const FOREGROUND  = Color('#C8C4CA');
const ACCENT      = Color('#FC644D');
const BLACK       = Color('#000');
const WHITE       = Color('#fff');
const BLIND       = Color('#00000000');

module.exports = {
  'focusBorder':                                 fade(ACCENT, .5),
  'selection.background':                        fade(ACCENT, .7),

  // Editor

  'editor.background':                           BACKGROUND,
  'editor.foreground':                           lighten(FOREGROUND, 0),
  'editor.lineHighlightBackground':              fade(BLACK, 0.13),
  'editor.selectionHighlightBackground':         fade(ACCENT, .2),
  'editorLineNumber.foreground':                 lighten(BACKGROUND, 15),
  'editorLineNumber.activeForeground':           lighten(BACKGROUND, 35),
  'editorBracketMatch.border':                   lighten(BACKGROUND, 35),
  'editorIndentGuide.background':                fade(lighten(BACKGROUND, 15), .32),
  'editorCodeLens.foreground':                   FOREGROUND,
  'editorGroupHeader.tabsBackground':            darken(BACKGROUND, 3),
  'editorGroupHeader.tabsBorder':                darken(BACKGROUND, 6),
  'editorGroup.border':                          darken(BACKGROUND, 6),
  'editorCursor.foreground':                     fade(WHITE, .7),

  'editor.selectionBackground':                  fade(ACCENT, .25),
  'editor.selectionHighlightBackground':         fade(ACCENT, .20),
  'editor.wordHighlightBackground':              fade(ACCENT, .20),
  'editor.inactiveSelectionBackground':          fade(ACCENT, .17),
  'editor.findMatchHighlightBackground':         fade('#096759', .4),
  'editor.findMatchBackground':                  fade('#096759', .6),

  // Rulers

  "editorRuler.foreground":                      fade(lighten(BACKGROUND, 15), .32),

  'editorGutter.addedBackground':                '#87b544',
  'editorGutter.modifiedBackground':             '#c5a6ff',
  'editorGutter.deletedBackground':              '#b9474c',

  // Tab

  'tab.activeForeground':                        lighten(FOREGROUND, 10),
  'tab.inactiveForeground':                      darken(FOREGROUND, 20),
  'tab.inactiveBackground':                      darken(BACKGROUND, 3),
  'tab.unfocusedActiveForeground':               darken(FOREGROUND, 20),
  'tab.border':                                  darken(BACKGROUND, 6),

  // StatusBar

  'statusBar.background':                        darken(BACKGROUND, 3),
  'statusBar.border':                            darken(BACKGROUND, 6),
  'statusBar.foreground':                        darken(FOREGROUND, 15),
  'statusBarItem.hoverBackground':               fade(BLACK, .25),
  'statusBarItem.activeBackground':              fade(BLACK, .35),
  'statusBar.debuggingBackground':               darken(BACKGROUND, 3),
  'statusBar.debuggingForeground':               '#e4b871',
  'statusBar.noFolderBackground':                darken(BACKGROUND, 3),
  'statusBar.noFolderForeground':                darken(FOREGROUND, 15),

  // ActivityBar

  'activityBar.background':                      darken(BACKGROUND, 3),
  'activityBar.border':                          darken(BACKGROUND, 6),
  'activityBar.foreground':                      lighten(FOREGROUND, 3),
  'activityBarBadge.background':                 ACCENT,
  'activityBarBadge.foreground':                 WHITE,

  // TitleBar

  'titleBar.activeBackground':                   darken(BACKGROUND, 7),
  'titleBar.activeForeground':                   darken(FOREGROUND, 10),
  'titleBar.inactiveBackground':                 darken(BACKGROUND, 5),
  'titleBar.inactiveForeground':                 darken(FOREGROUND, 30),

  // Sidebar

  'sideBar.background':                          darken(BACKGROUND, 3),
  'sideBar.border':                              darken(BACKGROUND, 6),
  'sideBar.foreground':                          FOREGROUND,
  'sideBarTitle.foreground':                     darken(FOREGROUND, 15),
  'sideBarSectionHeader.background':             BACKGROUND,

  // Inputs

  'input.background':                            darken(BACKGROUND, 7),
  'input.foreground':                            lighten(FOREGROUND, 10),
  'input.placeholderForeground':                 FOREGROUND,
  'input.border':                                darken(BACKGROUND, 8.5),
  'inputValidation.errorBorder':                 '#ff5370',
  'inputValidation.infoBorder':                  '#82aaff',
  'inputValidation.warningBorder':               '#ffcb6b',
  'dropdown.background':                         darken(BACKGROUND, 4),
  'dropdown.border':                             darken(BACKGROUND, 7),

  'list.hoverForeground':                        lighten(FOREGROUND, 10),
  'list.focusForeground':                        lighten(FOREGROUND, 15),
  'list.inactiveSelectionForeground':            FOREGROUND,
  'list.activeSelectionForeground':              lighten(FOREGROUND, 20),

  'list.hoverBackground':                        fade(BLACK, .1),
  'list.focusBackground':                        fade(BLACK, .2),
  'list.inactiveSelectionBackground':            fade(BLACK, .25),
  'list.activeSelectionBackground':              fade(BLACK, .27),

  'list.highlightForeground':                    lighten(ACCENT, 15),

  // ScrollBar

  'scrollbarSlider.background':                  fade(BLACK, 0.2),
  'scrollbarSlider.hoverBackground':             fade(BLACK, 0.3),
  'scrollbarSlider.activeBackground':            fade(BLACK, 0.4),
  'scrollbar.shadow':                            darken(BACKGROUND, 6),

  // editorSuggestWidget

  'editorSuggestWidget.background':              darken(BACKGROUND, 4),
  'editorSuggestWidget.foreground':              lighten(FOREGROUND, 15),
  'editorSuggestWidget.highlightForeground':     ACCENT,
  'editorSuggestWidget.selectedBackground':      fade(BLACK, .2),
  'editorSuggestWidget.border':                  darken(BACKGROUND, 9),

  // pickerGroup

  'pickerGroup.border':                          darken(BACKGROUND, 7),
  'pickerGroup.foreground':                      FOREGROUND,


  // Widgets

  'editorWidget.background':                     darken(BACKGROUND, 5),
  'widget.shadow':                               fade(darken(BACKGROUND, 6), .65),
  'editorHoverWidget.background':                darken(BACKGROUND, 5),
  'editorHoverWidget.border':                    darken(BACKGROUND, 7),

  // DebugToolBar

  'debugToolBar.background':                     darken(BACKGROUND, 5),

  // Panel

  'panel.background':                            darken(BACKGROUND, 4),
  'panel.border':                                darken(BACKGROUND, 6),
  'panelTitle.activeForeground':                 darken(FOREGROUND, 10),
  'panelTitle.activeBorder':                     BLIND,

  // DiffEditor

  'diffEditor.insertedTextBackground':           '#c3e88d15',
  'diffEditor.removedTextBackground':            '#ff537020',

  // Notification

  'notification.background':                     darken(BACKGROUND, 7),
  'notification.foreground':                     FOREGROUND,

  // Badge

  'badge.background':                            BACKGROUND,
  'badge.foreground':                            FOREGROUND,

  // Button

  'button.background':                           lighten(BACKGROUND, 20),
  'button.hoverBackground':                      lighten(BACKGROUND, 20),
  'button.foreground':                           WHITE,

  // ExtensionButton

  'extensionButton.prominentBackground':         lighten(BACKGROUND, 20),
  'extensionButton.prominentHoverBackground':    lighten(BACKGROUND, 30),

  // PeekView

  'peekView.border':                             darken(BACKGROUND, 7),
  'peekViewTitle.background':                    darken(BACKGROUND, 3),
  'peekViewEditor.background':                   darken(BACKGROUND, 5),
  'peekViewResult.background':                   darken(BACKGROUND, 5),
  'peekViewEditorGutter.background':             darken(BACKGROUND, 5),
  'peekViewTitleDescription.foreground':         FOREGROUND,

  // Git Decorations

  'gitDecoration.ignoredResourceForeground':     fade(FOREGROUND, .35),
  'gitDecoration.modifiedResourceForeground':    '#d9bc86',
  'gitDecoration.deletedResourceForeground':     '#cc807e',
  'gitDecoration.conflictingResourceForeground': '#bc91d9',
  'gitDecoration.untrackedResourceForeground':   '#b5d18c',

  // Terminal

  'terminal.ansiWhite':                          '#ffffff',
  'terminal.ansiBlack':                          '#546e7a',
  'terminal.ansiBlue':                           '#82aaff',
  'terminal.ansiCyan':                           '#89ddff',
  'terminal.ansiGreen':                          '#c3e88d',
  'terminal.ansiMagenta':                        '#c792ea',
  'terminal.ansiRed':                            '#ff5370',
  'terminal.ansiYellow':                         '#ffcb6b',
  'terminal.ansiBrightWhite':                    '#ffffff',
  'terminal.ansiBrightBlack':                    '#546e7a',
  'terminal.ansiBrightBlue':                     '#82aaff',
  'terminal.ansiBrightCyan':                     '#89ddff',
  'terminal.ansiBrightGreen':                    '#c3e88d',
  'terminal.ansiBrightMagenta':                  '#c792ea',
  'terminal.ansiBrightRed':                      '#ff5370',
  'terminal.ansiBrightYellow':                   '#ffcb6b'
}
