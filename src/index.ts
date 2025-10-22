import { StatusBarAlignment, window, workspace } from 'vscode'

function getAlign(): StatusBarAlignment {
  const align: string = workspace.getConfiguration('open-in-github-button').get('align') as string
  switch (align) {
    case 'left':
      return StatusBarAlignment.Left
    case 'right':
      return StatusBarAlignment.Right
    default:
      return StatusBarAlignment.Left
  }
}

function alignPriority(): number {
  return +(workspace.getConfiguration('open-in-github-button').get('alignPriority') as string)
}

export function activate() {
  const statusBar = window.createStatusBarItem(getAlign(), alignPriority())
  statusBar.command = 'openInGitHub.openProject'
  statusBar.text = '$(github)'
  statusBar.tooltip = 'Open in GitHub'
  statusBar.show()
}

export function deactivate() {

}
