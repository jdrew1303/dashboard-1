// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Controller for the replication controller details view.
 *
 * @final
 */
export default class ReplicationControllerDetailController {
  /**
   * @param {!backendApi.ReplicationControllerDetail} replicationControllerDetail
   * @param {!ui.router.$state} $state
   * @param {!../common/resource/resourcedetail.StateParams} $stateParams
   * @param {!angular.Resource} kdRCPodsResource
   * @param {!angular.Resource} kdRCServicesResource
   * @param {!angular.Resource} kdRCEventsResource
   * @ngInject
   */
  constructor(
      replicationControllerDetail, $state, $stateParams, kdRCPodsResource, kdRCServicesResource,
      kdRCEventsResource) {
    /** @export {!backendApi.ReplicationControllerDetail} */
    this.replicationControllerDetail = replicationControllerDetail;

    /** @export {!angular.Resource} */
    this.podListResource = kdRCPodsResource;

    /** @export {!angular.Resource} */
    this.serviceListResource = kdRCServicesResource;

    /** @export {!angular.Resource} */
    this.eventListResource = kdRCEventsResource;

    /** @private {!ui.router.$state} */
    this.state_ = $state;

    /** @private {!../common/resource/resourcedetail.StateParams} */
    this.stateParams_ = $stateParams;

    /** @export */
    this.i18n = i18n;
  }

  /**
   * @param {!backendApi.Pod} pod
   * @return {boolean}
   * @export
   */
  hasCpuUsage(pod) {
    return !!pod.metrics && !!pod.metrics.cpuUsageHistory && pod.metrics.cpuUsageHistory.length > 0;
  }

  /**
   * @param {!backendApi.Pod} pod
   * @return {boolean}
   * @export
   */
  hasMemoryUsage(pod) {
    return !!pod.metrics && !!pod.metrics.memoryUsageHistory &&
        pod.metrics.memoryUsageHistory.length > 0;
  }
}

const i18n = {
  /** @export {string} @desc Title 'Pods', which appears at the top of the pods list on the
      replication controller detail view. */
  MSG_RC_DETAIL_PODS_TITLE: goog.getMsg('Pods'),
  /** @export {string} @desc Title 'Service', which appears at the top of the services list on the
      replication controller detail view. */
  MSG_RC_DETAIL_SERVICES_TITLE: goog.getMsg('Services'),
  /** @export {string} @desc Title for services card zerostate in replication controller details page. */
  MSG_RC_DETAIL_SERVICES_ZEROSTATE_TITLE: goog.getMsg('There is nothing to display here'),
  /** @export {string} @desc Text for services card zerostate in replication controller details page. */
  MSG_RC_DETAIL_SERVICES_ZEROSTATE_TEXT: goog.getMsg(
      'There are currently no Services with the same label selector ' +
      'as this Replication Controller'),
  /** @export {string} @desc Title for pods card zerostate in replication controller details page. */
  MSG_RC_DETAIL_PODS_ZEROSTATE_TITLE: goog.getMsg('There is nothing to display here'),
  /** @export {string} @desc Text for pods card zerostate in replication controller details page. */
  MSG_RC_DETAIL_PODS_ZEROSTATE_TEXT:
      goog.getMsg('There are currently no Pods selected by this Replication Controller'),
  /** @export {string} @desc Title for graph card displaying CPU metric of one replication controller. */
  MSG_REPLICATION_CONTROLLER_DETAIL_CPU_GRAPH_CARD_TITLE: goog.getMsg('CPU usage history'),
  /** @export {string} @desc Title for graph card displaying memory metric of one replication controller. */
  MSG_REPLICATION_CONTROLLER_DETAIL_MEMORY_GRAPH_CARD_TITLE: goog.getMsg('Memory usage history'),

};
