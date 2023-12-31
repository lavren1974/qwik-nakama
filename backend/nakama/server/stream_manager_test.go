// Copyright 2022 The Nakama Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package server

import "github.com/gofrs/uuid/v5"

type testStreamManager struct{}

func (t testStreamManager) UserJoin(stream PresenceStream, userID, sessionID uuid.UUID, hidden, persistence bool, status string) (bool, bool, error) {
	return true, true, nil
}

func (t testStreamManager) UserUpdate(stream PresenceStream, userID, sessionID uuid.UUID, hidden, persistence bool, status string) (bool, error) {
	return true, nil
}

func (t testStreamManager) UserLeave(stream PresenceStream, userID, sessionID uuid.UUID) error {
	return nil
}
