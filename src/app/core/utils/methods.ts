export class Methods {
  getSeverity = (status: string): 'danger' | 'success' | 'info' | 'warning' => {
    switch (status) {
      case 'Dead':
        return 'danger';

      case 'Alive':
        return 'success';

      case 'unknown':
        return 'info';
    }
    return 'danger';
  }
}
