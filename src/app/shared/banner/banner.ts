import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-banner',
  imports: [RouterLink, Button],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
})
export class Banner {}
