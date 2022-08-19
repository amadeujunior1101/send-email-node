import Queue from "bull";
import redisConfig from "../config/redis";

import * as jobs from "../jobs";

interface Job {
  key: string;
  handle: Function;
}

const queues = Object.values(jobs).map((job: Job) => ({
  bull: new Queue(job.key, {
    redis: redisConfig,
  }),
  name: job.key,
  handle: job.handle,
}));

export default {
  queues,
  async add(name: any, data: any) {
    const queue: any = this.queues.find((queue_) => queue_.name === name);

    return queue.bull.add(data, queue.options);
  },
  async process() {
    return this.queues.forEach((queue: any) => {
      queue.bull.process(queue.handle);

      queue.bull.on("failed", (job: any, err: any) => {
        console.log("Job failed", queue.key, job.data);
        console.log("err=>", err);
      });
    });
  },
};
