public struct Entities: Codable {
	public let id: Int?
	public let companyName: String?
	public let licenseId: String?
	public let ceaSalespersonNo: String?
	public let description: String?
	public let website: String?
	public let websiteExpiryDate: WebsiteExpiryDate?
	public let premium: Int?
	public let showProfile: Bool?
	public let shareMedia: Bool?
	public let listingsCount: Int?
	public let listingLimit: Int?
	public let jobTitle: String?
	public let moderationStatus: Any?
	public let analyticsLimit: String?
	public let agreementDate: AgreementDate?
	public let lastUpdated: LastUpdated?
	public let photo: Array<String>?
	public let logo: Array<String>?
	public let specialities: Array<Any>?
	public let services: Array<Any>?
	public let regions: Array<Any>?
	public let estates: Array<Any>?
	public let featured: Array<Any>?
	public let agency: Agency?
	public let webUser: WebUser?
	
}

public struct WebUser: Codable {
	public let id: Int?
	public let facebook_id: Any?
	public let accountRule: AccountRule?
	public let createdDate: CreatedDate?
	public let statusCode: String?
	public let role: String?
	public let subscriptionStart: SubscriptionStart?
	public let subscriptionEnd: SubscriptionEnd?
	public let lastUpdated: LastUpdated?
	public let person: Person?
	public let loyalty_start_date: String?
	
}

public struct Person: Codable {
	public let id: Int?
	public let firstname: String?
	public let lastname: String?
	public let source: String?
	public let contactInformation: ContactInformation?
	
}

public struct ContactInformation: Codable {
	public let mobile: Mobile?
	public let telephone: Any?
	public let fax: Any?
	public let email: String?
	public let postcode: String?
	public let country: String?
	public let region: Any?
	public let city: String?
	public let area: Any?
	public let extension: Any?
	public let blackberryPin: Any?
	public let lastUpdated: LastUpdated?
	
}

public struct LastUpdated: Codable {
	public let date: String?
	public let timezone_type: Int?
	public let timezone: String?
	
}

public struct Mobile: Codable {
	public let countryCode: String?
	public let nationalDestinationCode: Any?
	public let nationalDestinationCodeInternational: Any?
	public let subscriberNumber: String?
	public let isMobile: Bool?
	public let isValid: Bool?
	
}

public struct LastUpdated: Codable {
	public let date: String?
	public let timezone_type: Int?
	public let timezone: String?
	
}

public struct SubscriptionEnd: Codable {
	public let date: String?
	public let timezone_type: Int?
	public let timezone: String?
	
}

public struct SubscriptionStart: Codable {
	public let date: String?
	public let timezone_type: Int?
	public let timezone: String?
	
}

public struct CreatedDate: Codable {
	public let date: String?
	public let timezone_type: Int?
	public let timezone: String?
	
}

public struct AccountRule: Codable {
	public let code: String?
	public let description: String?
	public let residential: Int?
	public let commercial: Int?
	public let defaultListingLimit: Int?
	public let accountType: String?
	public let statusCode: String?
	public let billingType: String?
	public let premium: String?
	public let transactionHistory: String?
	
}

public struct Agency: Codable {
	public let id: Int?
	public let licenseId: Any?
	public let ceaLicenseNo: String?
	public let name: String?
	public let verified: Int?
	public let lastUpdated: LastUpdated?
	public let logo: Array<String>?
	
}

public struct LastUpdated: Codable {
	public let date: String?
	public let timezone_type: Int?
	public let timezone: String?
	
}

public struct LastUpdated: Codable {
	public let date: String?
	public let timezone_type: Int?
	public let timezone: String?
	
}

public struct AgreementDate: Codable {
	public let date: String?
	public let timezone_type: Int?
	public let timezone: String?
	
}

public struct WebsiteExpiryDate: Codable {
	public let date: String?
	public let timezone_type: Int?
	public let timezone: String?
	
}

