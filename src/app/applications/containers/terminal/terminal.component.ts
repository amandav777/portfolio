import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TerminalService } from 'primeng/terminal';
import { TerminalCommand } from 'src/app/shared/config/terminal-command';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TerminalService]
})
export class TerminalComponent {

  constructor(private terminalService: TerminalService) {
    this.terminalService.commandHandler.subscribe(command => {
      const response = this.getCommandResponse(command);
      this.terminalService.sendResponse(response);
    });
  }

  private getCommandResponse(command: string) {
    switch (command.toUpperCase()) {
      case TerminalCommand.whoAmandaIs: return 'Developer Thing';
      case TerminalCommand.skills: return 'PrimeNg';
      case TerminalCommand.exp: return 'Angular';
      default: return 'Comando desconhecido, tente novamente :p';
    }
  }
// l
}
