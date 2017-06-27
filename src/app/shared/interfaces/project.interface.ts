export interface IProject {
	_id : string;
	_uid : string;
	name : string;
}
export interface IRProject {
	project : IProject;
}

export interface IProjects {
	_id : string;
	name : string;
}
export interface IRProjects {
	projects : Array<IProjects>;
}

export interface IProjectsSave {
	_id : string;
	_uid : string;
}
export interface IRProjectsSave {
	project : IProjectsSave;
}

export interface IRProjectsDelete {
}
