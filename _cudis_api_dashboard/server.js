const express = require('express');
const app = express();
const PORT = 3000;

// app.use(express.json());
app.use(express.static(__dirname));

const heartbeatData = {
  code: 200,
  msg: 'success',
  data: {
    maximum: 80,
    minimum: 60,
    average: 73,
    list: [
      {
        date: '2024-09-16',
        maxY: 80.0,
        minY: 70.0,
      },
      {
        date: '2024-09-17',
        maxY: 80.0,
        minY: 60.0,
      },
      {
        date: '2024-09-18',
        maxY: 80.0,
        minY: 75.0,
      },
    ],
  },
};

const stepData = {
  code: 200,
  msg: 'success',
  data: {
    countStep: 4291,
    list: [
      {
        date: '2024-09-16',
        y: 2523.0,
      },
      {
        date: '2024-09-17',
        y: 771.0,
      },
      {
        date: '2024-09-18',
        y: 997.0,
      },
    ],
  },
};

const sleepData = {
  code: 200,
  msg: 'success',
  data: {
    deepRatio: 10,
    shallowRatio: 86,
    awakeRatio: 4,
    sumDuration: 431,
    list: [
      {
        date: '2024-09-15',
        deepY: 59,
        shallowY: 468,
        awakeY: 7,
      },
      {
        date: '2024-09-16',
        deepY: 37,
        shallowY: 384,
        awakeY: 20,
      },
      {
        date: '2024-09-17',
        deepY: 44,
        shallowY: 265,
        awakeY: 10,
      },
    ],
  },
};

// Simulate heartbeat data endpoint
app.get('/partner/v1/query/heart_beat', (req, res) => {
  res.json(heartbeatData);
});

// Simulate step data endpoint (in development)
app.get('/partner/v1/query/step', (req, res) => {
  res.json(stepData);
});

// Simulate sleep data endpoint (in development)
app.get('/partner/v1/query/sleep', (req, res) => {
  res.json(sleepData);
});

app.listen(PORT, () => {
  console.log(`Dummy CUDIS API server running on port ${PORT}`);
});
