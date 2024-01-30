import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvatarGeneratorService {
  private colors = [
    '#EB7181',
    '#468547',
    '#FFD558',
    '#3670B2',
    '#1ad67b'
  ];

  generateInitials(name: string): string {
    return name.split(' ')
      .slice(0, 2)
      .map(n => n[0]?.toUpperCase())
      .join('');
  }

  generateAvatar(name: string): string {
    const storedAvatar = localStorage.getItem(name);
    if (storedAvatar) {
      return storedAvatar;
    }

    const newAvatar = this.createAvatar(name);
    localStorage.setItem(name, newAvatar);
    return newAvatar;
  }

  private createAvatar(name: string): string {
    const initials = this.generateInitials(name);
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('Unable to get canvas context');
    }

    const color = this.getColorForName(name);
    const size = 50;

    canvas.width = size;
    canvas.height = size;

    context.fillStyle = color;
    context.fillRect(0, 0, size, size);

    const fontSize = Math.min(size / 2, 20);
    context.fillStyle = '#FFFFFF';
    context.font = `${fontSize}px Arial`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(initials, size / 2, size / 2);

    return canvas.toDataURL();
  }

  private getColorForName(name: string): string {
    let sumChars = 0;
    for (let i = 0; i < name.length; i++) {
      sumChars += name.charCodeAt(i);
    }
    return this.colors[sumChars % this.colors.length];
  }
}
