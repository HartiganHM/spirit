import modulationConnections from '../../data/modulationConnections';
import posturalConnections from '../../data/posturalConnections';
import sensoryConnections from '../../data/sensoryConnections';
import socialConnections from '../../data/socialConnections';
import executiveConnections from '../../data/executiveConnections';

const getThreadConnections = processComponent => {
  const SAM = {
    mod: modulationConnections,
    pos: posturalConnections,
    sen: sensoryConnections,
    soc: socialConnections,
    exe: executiveConnections
  };

  const processKey = Object.keys(processComponent)[0];
  const category = processKey.split('_')[0];
  const threadConnections = SAM[category][processKey];

  return threadConnections;
};

export default getThreadConnections;
