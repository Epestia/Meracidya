import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personnages',
  templateUrl: './personnages.component.html',
  styleUrls: ['./personnages.component.css']
})
export class PersonnagesComponent {
  selectedRace: string = '';
  selectedSubrace: string = '';
  selectedJob: string = '';
  selectedCraft: string = '';
  selectedChoice: string = ''; 
  selectedLevel: number = 1;
  races: string[] = ['Les miqo\'tes', 'Les Hyurs', 'Les Elezens', 'Les Roegadyns', 'Les Lalafells', 'Les Ao Ras', 'Les Viéras', 'les hrothgars'];
  subraces: { [key: string]: string[] } = {
    'Les miqo\'tes': ['La tribu du Soleil', 'La tribu de la Lune'],
    'Les Hyurs': ['Le clan Hyurois', 'Le clan Hyurgoths'],
    'Les Elezens': ['Le clan Sylvestres', 'Le clan Crépusculaires'],
    'Les Roegadyns': ['Le Clan de la Mer', 'Le Clan du Feu'],
    'Les Lalafells': ['Le peuple des Plaines', 'Le peuple des Dunes'],
    'Les Ao Ras': ['Le clan Raens', 'Le clan Xaelas'],
    'Les Viéras': ['Le clan Rava', 'Le clan Veena'],
    'les hrothgars': ['Le clan Hélion', 'Le clan Eloigné']
  };
  jobs: string[] = ['Paladin (PLD)', 'Guerrier (WAR)', 'Chevalier Noir (DRK)', 'Pistosabreur (PSB)', 'Barde (BRD)', 'Machiniste (MCH)', 'Danseur (DNC)', 'Moine (MNK)', 'Chevalier Dragon (DRG)', 'Samouraï (SAM)', 'Ninja (NIN)', 'Faucheur (FCH)', 'Viper(VPR)', 'Mage Blanc (WHM)', 'Érudit (SCH)', 'Astrologue (AST)', 'Sage(SGE)', 'Mage Noir (BLM)', 'Invocateur (SMN)', 'Pictomancien (PTC)', 'Mage Bleu (MBL)', 'Dompteur (DMP)'];
  Crafts: string[] = ['Forgeron (FOR)', 'Armurier (ARM)', 'Menuisier (MEN)', 'Orfèvre (ORF)', 'Tanneur (TAN)', 'Couturier (COU)', 'Alchimiste (ALC)', 'Cuisinier (CUIS)', 'Botaniste (BTN)', 'Mineur (MIN)', 'Pêcheur (PCH)'];
  constructor() {}

  submitForm() {
    if (!this.isFormValid()) {
      console.log("Veuillez remplir tous les champs du formulaire.");
      alert("Veuillez remplir tous les champs du formulaire.");
      return;
    }

    if (this.selectedLevel < 1 || this.selectedLevel > 100) {
      console.log("Le niveau doit être compris entre 1 et 100.");
      alert("Le niveau doit être compris entre 1 et 100.");
      return;
    }

    if ((this.selectedJob === 'Mage Bleu (MBL)' || this.selectedJob === 'Dompteur (DMP)') && (this.selectedLevel < 1 || this.selectedLevel > 90)) {
      console.log("Le niveau pour ce job doit être compris entre 1 et 90.");
      alert("Le niveau pour ce job doit être compris entre 1 et 90.");
      return;
    }

    if ((this.selectedJob === 'Chevalier Noir (DRK)' || this.selectedJob === 'Astrologue (AST)' || this.selectedJob === 'Machiniste (MCH)') && (this.selectedLevel < 30 || this.selectedLevel > 100)) {
      console.log("Le niveau pour ce job doit être compris entre 30 et 100.");
      alert("Le niveau pour ce job doit être compris entre 30 et 100.");
      return;
    }

    if ((this.selectedJob === 'Samouraï (SAM)' || this.selectedJob === 'Mage Rouge (RDM)') && (this.selectedLevel < 50 || this.selectedLevel > 100)) {
      console.log("Le niveau pour ce job doit être compris entre 50 et 100.");
      alert("Le niveau pour ce job doit être compris entre 50 et 100.");
      return;
    }

    if ((this.selectedJob === 'Pistosabreur (PSB)' || this.selectedJob === 'Danseur (DNC)') && (this.selectedLevel < 60 || this.selectedLevel > 100)) {
      console.log("Le niveau pour ce job doit être compris entre 60 et 100.");
      alert("Le niveau pour ce job doit être compris entre 60 et 100.");
      return;
    }

    if ((this.selectedJob === 'Faucheur (FCH)' || this.selectedJob === 'Sage (SGE)') && (this.selectedLevel < 70 || this.selectedLevel > 100)) {
      console.log("Le niveau pour ce job doit être compris entre 70 et 100.");
      alert("Le niveau pour ce job doit être compris entre 70 et 100.");
      return;
    }

    if ((this.selectedJob === 'Viper (VPR)' || this.selectedJob === 'Pictomancien (PTC)') && (this.selectedLevel < 80 || this.selectedLevel > 100)) {
      console.log("Le niveau pour ce job doit être compris entre 80 et 100.");
      alert("Le niveau pour ce job doit être compris entre 80 et 100.");
      return;
    }
  }

  isFormValid(): boolean {
    return !!this.selectedRace && !!this.selectedSubrace && !!this.selectedJob && this.selectedLevel !== null && this.selectedLevel !== undefined;
  }
  
}

