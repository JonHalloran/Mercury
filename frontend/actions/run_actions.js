import * as runAPIUtil from "../util/run_util";
import { RECEIVE_ROUTE_ERRORS } from "./route_actions";

export const RECEIVE_RUN = "RECEIVE_RUN";
export const RECEIVE_RUNS = "RECEIVE_RUNS";
export const RECEIVE_RUN_ERRORS = "RECEIVE_RUN_ERRORS";

export const receiveRuns = payload => ({
  type: RECEIVE_RUNS,
  payload
});

export const receiveRun = payload => ({
  type: RECEIVE_RUN,
  payload
});

export const receiveRunErrors = errors => ({
  type: RECEIVE_RUN_ERRORS,
  errors
});

export const createRun = runForm => dispatch =>
  runAPIUtil
    .createRun(runForm)
    .then(run =>
      dispatch(receiveRun(run), errors => dispatch(receiveRunErrors(errors)))
    );

export const retrieveRuns = () => dispatch =>
  runAPIUtil
    .retrieveRuns()
    .then(payload =>
      dispatch(receiveRuns(payload), errors =>
        dispatch(receiveRunErrors(errors))
      )
    );

export const retrieveRun = runId => dispatch =>
  runAPIUtil
    .retrieveRun(runId)
    .then(payload =>
      dispatch(receiveRun(payload), errors =>
        dispatch(receiveRunErrors(errors))
      )
    );
