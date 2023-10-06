import common from "./common";
import local from "./local";
import dev from "./dev";
import prod from "./prod";
import * as process from "process";
import * as yaml from 'js-yaml';
import { readFileSync } from 'fs';

const phase = process.env.NODE_ENV; // 1 phase에 NODE_ENV값 저장
console.log("phase : " + phase.trim());
let conf = {}; // 2 phase의 값에 따라서 적절한 환경 변숫값을 conf에 저장
if (phase === 'local') {
    conf = local;
} else if (phase === 'dev') {
    conf = dev;
} else if (phase === 'prod') {
    conf = prod;
}
console.log("CONF :::   " , conf);

const yamlConfig: Record<string, any> = yaml.load(
    readFileSync(`${process.cwd()}/envs/config.yaml`,'utf-8'),
);

// 3 common과 conf에서 받은 값을 합쳐서 결괏값으로 주는 함수 반환
export default () => ({
    ...common,
    ...conf,
    ...yamlConfig,
});