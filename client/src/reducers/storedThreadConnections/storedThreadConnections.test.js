import storedThreadConnections from './storedThreadConnections';
import markedThreadConnections from '../../data/markedThreadConnections';
import * as actions from '../../actions';

describe('storedThreadConnections reducer tests', () => {
  it('Should return store by default', () => {
    const expected = markedThreadConnections;

    expect(storedThreadConnections(undefined, markedThreadConnections)).toEqual(
      expected
    );
  });

  it('Should return a new store with storedThreadConnections', () => {
    const expected = markedThreadConnections;

    expect(
      storedThreadConnections(
        undefined,
        actions.checkThreadConnections(markedThreadConnections)
      )
    ).toEqual(expected);
  });
});
