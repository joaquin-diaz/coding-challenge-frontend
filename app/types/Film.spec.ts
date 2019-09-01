import { consolidateSuggestions } from './Film';

describe('Consolidate Suggestions', () => {
  it('should return 2 suggestions', () => {
    const films: Array<any> = [
      {
        title: 'Venom',
        releaseYear: '2018',
        actor1: 'Tomy',
      },
      {
        title: 'Venom',
        releaseYear: '2018',
        actor1: 'Tomy',
      },
      {
        title: 'Sarasa',
        releaseYear: '2014',
        actor1: 'Venoso',
      },
    ];

    const suggestions = consolidateSuggestions(films, 've');
    expect(suggestions.length).toBe(2);
    expect(suggestions).toEqual(['Venom', 'Sarasa - Main actor: Venoso']);
  });

  it('should return 0 suggestions', () => {
    const films: Array<any> = [
      {
        title: 'Venom',
        releaseYear: '2018',
        actor1: 'Tomy',
      },
      {
        title: 'Venom',
        releaseYear: '2018',
        actor1: 'Tomy',
      },
      {
        title: 'Sarasa',
        releaseYear: '2014',
        actor1: 'Venoso',
      },
    ];

    const suggestions = consolidateSuggestions(films, 'else');
    expect(suggestions.length).toBe(0);
  });

  it('should return 1 suggestions', () => {
    const films: Array<any> = [
      {
        title: 'Venom',
        releaseYear: '2018',
        actor1: 'Tomy',
      },
      {
        title: 'Venom',
        releaseYear: '2018',
        actor1: 'Tomy',
      },
      {
        title: 'Sarasa',
        releaseYear: '2014',
        actor1: 'Venoso',
      },
    ];

    const suggestions = consolidateSuggestions(films, '2014');
    expect(suggestions.length).toBe(1);
    expect(suggestions).toEqual(['Sarasa - Released on 2014']);
  });
});
