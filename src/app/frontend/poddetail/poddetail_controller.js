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
 * @final
 */
export class PodDetailController {
  /**
   * @ngInject
   * @param {!backendApi.PodDetail} podDetail
   */
  constructor(podDetail) {
    /** @export {!backendApi.PodDetail} */
    this.podDetail = podDetail;

    /** @export */
    this.i18n = i18n;
  }
}

const i18n = {
  /** @export {string} @desc Label 'Overview', which appears on the first navigation tab on the pod
     details page. */
  MSG_POD_DETAIL_OVERVIEW_LABEL: goog.getMsg('Overview'),
  /** @export {string} @desc Title for graph card displaying CPU metric of one pod. */
  MSG_POD_DETAIL_CPU_GRAPH_CARD_TITLE: goog.getMsg('CPU usage history'),
  /** @export {string} @desc Title for graph card displaying memory metric of one pod. */
  MSG_POD_DETAIL_MEMORY_GRAPH_CARD_TITLE: goog.getMsg('Memory usage history'),
};
