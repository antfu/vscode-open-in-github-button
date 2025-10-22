import { StatusBarAlignment, window, workspace } from 'vscode'

function alignPriority(): number {
  return +(workspace.getConfiguration('open-in-github-button').get('alignPriority') as string)
}

export function activate() {
  const statusBar = window.createStatusBarItem(StatusBarAlignment.Left, alignPriority())
  statusBar.command = 'openInGitHub.openProject'
  statusBar.text = '$(github)'
  statusBar.tooltip = 'Open in GitHub'
  statusBar.show()
}

export function deactivate() {

}
