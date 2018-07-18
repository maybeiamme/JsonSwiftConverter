public struct Entity: Codable {
	public let results: Array<ResultsItem>?
	
}

public struct ResultsItem: Codable {
	public let geometry: Geometry?
	
}

public struct Geometry: Codable {
	public let location: Location?
	public let viewport: Viewport?
	
}

public struct Viewport: Codable {
	public let northeast: Northeast?
	public let southwest: Southwest?
	
}

public struct Southwest: Codable {
	public let lat: Double?
	public let lng: Double?
	
}

public struct Northeast: Codable {
	public let lat: Double?
	public let lng: Double?
	
}

public struct Location: Codable {
	public let lat: Double?
	public let lng: Double?
	
}

